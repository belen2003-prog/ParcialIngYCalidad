import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

@Component({
  template: `<div class="test-component"></div>`
})
class TestComponent {}
//prueba de integracion:verifica como interactuam los diferentes estilos entre si
//comprueba la herencia correcta de estilos , tambien que los cambios en un elemento no afecten
//inesperadamente a otros y asegura que las prop de estilo funcionen en conjunto
describe('Prueba de Integración de Estilos', () => {
  let fixture: ComponentFixture<TestComponent>;
  let element: HTMLElement;
  let estilosOriginales: {
    bodyColor: string;
    bodyFont: string;
    htmlHeight: string;
    boxSizing: string;
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    element = fixture.nativeElement;
    document.body.appendChild(element);

    // Guardamos todos los estilos originales
    estilosOriginales = {
      bodyColor: window.getComputedStyle(document.body).color,
      bodyFont: window.getComputedStyle(document.body).fontFamily,
      htmlHeight: document.documentElement.style.height,
      boxSizing: window.getComputedStyle(element).boxSizing
    };
  });

  it('debe mantener la coherencia entre todos los estilos aplicados', () => {
    // Aplicamos cambios en cascada
    document.documentElement.style.height = '100%';
    document.body.style.color = 'rgb(195, 179, 216)';
    document.body.style.fontFamily = 'Poppins, sans-serif';

    const divTest = document.createElement('div');
    element.appendChild(divTest);

    // Verificamos que los estilos se hereden y apliquen correctamente
    const estilosDiv = window.getComputedStyle(divTest);
    const estilosBody = window.getComputedStyle(document.body);
    const estilosHtml = document.documentElement.style;

    // Verificación de herencia y cascada
    expect(estilosDiv.boxSizing).toBe('border-box');
    expect(estilosDiv.color).toBe(estilosBody.color);
    expect(estilosBody.fontFamily).toContain('Poppins');
    expect(estilosHtml.height).toBe('100%');

    // Verificación de integración completa
    expect({
      boxSizing: estilosDiv.boxSizing,
      color: estilosBody.color,
      fontFamily: estilosBody.fontFamily.includes('Poppins'),
      height: estilosHtml.height
    }).toEqual({
      boxSizing: 'border-box',
      color: 'rgb(195, 179, 216)',
      fontFamily: true,
      height: '100%'
    });
  });

  afterEach(() => {
    // Restauramos todos los estilos originales
    document.body.style.color = estilosOriginales.bodyColor;
    document.body.style.fontFamily = estilosOriginales.bodyFont;
    document.documentElement.style.height = estilosOriginales.htmlHeight;
    document.body.removeChild(element);
  });
});
