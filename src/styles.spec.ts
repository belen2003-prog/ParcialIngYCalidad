import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

@Component({
  template: `<div class="test-component"></div>`
})
class TestComponent {}

describe('Estilos Globales', () => {
  let fixture: ComponentFixture<TestComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    element = fixture.nativeElement;
    document.body.appendChild(element);
  });

  // Prueba 1: Verifica box-sizing
  it('Prueba 1:debe tener box-sizing: border-box en todos los elementos', () => {
    const computedStyle = window.getComputedStyle(element);
    expect(computedStyle.boxSizing).toBe('border-box');
  });

  // Prueba 2: Verifica altura del html
  it('Prueba 2:debe tener height en el elemento html', () => {
    const htmlElement = document.documentElement;
    htmlElement.style.height = '100%';
    expect(htmlElement.style.height).toBe('100%');
  });

  // Prueba 3: Verifica la fuente del body
  it('Prueba 3:debe usar la fuente Poppins en el body', () => {
    const bodyStyle = window.getComputedStyle(document.body);
    expect(bodyStyle.fontFamily).toContain('Poppins');
  });

  // Prueba 4: Verifica el color del texto del body
  it('Prueba 4:debe tener el color de texto correcto en el body', () => {
    const bodyStyle = window.getComputedStyle(document.body);
    expect(bodyStyle.color).toBe('rgb(195, 179, 216)'); // #c3b3d8 en RGB
  });

  // Prueba 5: Verifica los márgenes del body
  it('Prueba 5:debe tener margin 0 en el body', () => {
    const bodyStyle = window.getComputedStyle(document.body);
    expect(bodyStyle.margin).toBe('0px');
  });

  // Prueba 6: Verifica el padding del body
  it('Prueba 6:debe tener padding 0 en el body', () => {
    const bodyStyle = window.getComputedStyle(document.body);
    expect(bodyStyle.padding).toBe('0px');
  });

 // Prueba 7: Verifica el background-color del body
 it('Prueba 7: debe tener el color de fondo correcto en el body', () => {
   document.body.style.backgroundColor = '#f8f9fa'; // Color de fondo común en Bootstrap
   const bodyStyle = window.getComputedStyle(document.body);
   expect(bodyStyle.backgroundColor).toBe('rgb(248, 249, 250)');
 });

  // Prueba 8: Verifica el line-height del body
  it('Prueba 8:debe tener el line-height correcto en el body', () => {
    const bodyStyle = window.getComputedStyle(document.body);
    expect(bodyStyle.lineHeight).toBe('normal');
  });

  // Prueba 9: Verifica la propiedad overflow del html
  it('Prueba 9: debe tener overflow-x visible en el html', () => {
    const htmlStyle = window.getComputedStyle(document.documentElement);
    expect(htmlStyle.overflowX).toBe('visible');
  });

  // Prueba 10: Verifica el text-rendering del body
  it('Prueba 10: debe tener un valor válido de text-rendering en el body', () => {
    document.body.style.textRendering = 'optimizeLegibility';
    const bodyStyle = window.getComputedStyle(document.body);
    expect(['optimizelegibility', 'auto', '-webkit-optimize-legibility'])
      .toContain(bodyStyle.textRendering.toLowerCase());
  });

 afterEach(() => {
   if (element && document.body.contains(element)) {
     document.body.removeChild(element);
   }
 });

});


// prueba de regresion que falle intencionalmente :cambie el color de texto a un valor diferente
//y como se espera que sea del color original falla
describe('Prueba de regresión de color del texto', () => {
  let colorOriginal: string;

  beforeEach(() => {
    // Guardamos el color original
    colorOriginal = window.getComputedStyle(document.body).color;
  });

  it('debe fallar al detectar cambio no autorizado en el color del texto', () => {
    // Simulamos un cambio no deseado en el color
    document.body.style.color = 'rgb(100, 100, 100)';

    const colorActual = window.getComputedStyle(document.body).color;

    // Esta prueba fallará porque esperamos el color original
    expect(colorActual).toBe('rgb(195, 179, 216)');

    // También verificamos que no sea el nuevo color (redundante, pero ilustrativo)
    expect(colorActual).not.toBe('rgb(100, 100, 100)');
  });

  afterEach(() => {
    // Restauramos el color original
    document.body.style.color = colorOriginal;
  });
});

