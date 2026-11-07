import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LeadService } from '../../services/lead.service';
import Swal from 'sweetalert2';
import { Pais } from '../../models/pais.model';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-formulario-registro',
  imports: [
    CommonModule,          
    ReactiveFormsModule,
     
  ],
  templateUrl: './formulario-registro.component.html',
  styleUrl: './formulario-registro.component.scss'
})
export class FormularioRegistroComponent {
  public registroForm!: FormGroup;
  public enviando: boolean = false;
  public paises!: Pais [];

  constructor(
    private fb: FormBuilder,
    private leadService: LeadService,
    public paisService: PaisService,
  ) { }

  ngOnInit(): void {
    this.getPaisesList();
    this.inicializarFormulario();
  }

   getPaisesList(): void {
    this.paisService.getPaises().subscribe(
      (res: any) => {
        this.paises = res.paises;
      }
    );
  }

  inicializarFormulario(): void {
    this.registroForm = this.fb.group({
      nombreDueno: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9+\s-]{8,15}$/)]],
      nombreLocal: ['', [Validators.required, Validators.minLength(2)]],
      slugDeseado: ['', [Validators.required, Validators.pattern(/^[a-z0-9-]+$/)]], // Solo minúsculas, números y guiones
      pais: ['', [Validators.required]],
      categoriaTexto: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  // Helper para autogenerar el slug visualmente mientras escriben el nombre del local
  onNombreLocalChange(event: any): void {
    const nombre = event.target.value;
    const slugSugerido = nombre
      .toLowerCase()
      .trim()
      .replace(/[\s]+/g, '-')           // Reemplaza espacios por guiones
      .replace(/[^\w\-]+/g, '')         // Remueve caracteres especiales
      .replace(/\-\-+/g, '-')           // Evita doble guión
      .replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u')
      .replace(/ñ/g, 'n');
    
    // Solo lo auto-rellena si el campo slug está vacío o modificado nativamente
    this.registroForm.patchValue({ slugDeseado: slugSugerido });
  }

  enviarSolicitud(): void {
    if (this.registroForm.invalid) {
      this.registroForm.markAllAsTouched();
      return;
    }

    this.enviando = true;

    this.leadService.registrarLead(this.registroForm.value).subscribe({
      next: (resp) => {
        this.enviando = false;
        Swal.fire({
          title: '¡Solicitud Recibida! 🎉',
          text: 'Hemos registrado los datos de tu local. Nuestro equipo revisará la información y recibirás un correo de acceso en las próximas horas.',
          icon: 'success',
          confirmButtonColor: '#0d6efd'
        });
        this.registroForm.reset();
      },
      error: (err) => {
        this.enviando = false;
        const msgError = err.error?.msg || 'No pudimos procesar tu registro en este momento.';
        Swal.fire('Atención', msgError, 'warning');
      }
    });
  }

  // Helper para validar clases de Bootstrap 5 en la plantilla
  campoInvalido(campo: string): boolean {
    return this.registroForm.get(campo)!.invalid && this.registroForm.get(campo)!.touched;
  }

}
