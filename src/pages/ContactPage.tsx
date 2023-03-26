import { BasePage } from '../components';

export const ContactPage = () => {
  return (
    <BasePage pageTitle='Contacto'>
      <form className='formulario'>
        <fieldset>
          <legend>Tus Datos</legend>
          <div className='campo'>
            <label htmlFor='nombre'>Nombre:</label>
            <input id='nombre' type='text' placeholder='Tu nombre' required />
          </div>
          <div className='campo'>
            <label htmlFor='asunto'>Asunto:</label>
            <input type='text' id='asunto' placeholder='Tu asunto' />
          </div>
          <div className='campo'>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' placeholder='Tu email' />
          </div>
          <div className='campo'>
            <label htmlFor='tel'>Tel:</label>
            <input type='tel' id='tel' placeholder='Tu teléfono' />
          </div>
          <div className='campo'>
            <label htmlFor='message'>Mensaje:</label>
            <textarea rows={20} cols={20}></textarea>
          </div>
        </fieldset>

        <fieldset>
          <legend>País</legend>
          <div className='campo'>
            <label htmlFor='pais'>País</label>
            <select id='pais'>
              <option disabled>-- Seleccione --</option>
              <option value='MX'>México</option>
              <option value='CO'>Colombia</option>
              <option value='PR'>Perú</option>
              <option value='AR'>Argentina</option>
              <option value='ES'>España</option>
              <option value='CL'>Chile</option>
            </select>
          </div>
        </fieldset>

        <fieldset>
          <legend>Información extra</legend>
          <div className='campo'>
            <label htmlFor='cliente'>Cliente:</label>
            <input type='radio' name='tipo' value='cliente' />
          </div>
          <div className='campo'>
            <label htmlFor='proveedor'>Proveedor:</label>
            <input type='radio' name='tipo' value='proveedor' />
          </div>
          <div className='campo'>
            <label htmlFor='categoria'>Categoría de interés:</label>
            <input list='categorias' name='categorias' />
            <datalist id='categorias'>
              <option value='Cocina' />
              <option value='Exterior' />
              <option value='Recamaras' />
              <option value='Oficina' />
              <option value='Televisión' />
            </datalist>
          </div>
        </fieldset>
        <button type='submit' className='btn'>Enviar Formulario</button>
      </form>
    </BasePage>
  );
};
