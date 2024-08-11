import { useState } from 'react';


// ? When you provide the exact HTML element type in the angle brackets (<>), like HTMLInputElement in your case, you're telling TypeScript exactly what kind of element the event is coming from. This helps TypeScript provide accurate suggestions and error checking based on the properties and methods that are specific to that kind of element. For example, an HTMLInputElement has properties like value and checked that other elements don't have. By specifying the exact element type, TypeScript can help you avoid mistakes and write safer code.


type Person = {
  name: string;
};

function Component() {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    const formData = new FormData(e.target as HTMLFormElement);

    // const data = Object.fromEntries(formData);
    // console.log(data);


    // ? The FormData API is a web technology that allows developers to easily construct and manage sets of key/value pairs representing form fields and their values. It is commonly used to send form data, including files, from a client (such as a web browser) to a server in a format that can be easily processed. The FormData API provides a way to programmatically create and manipulate form data, making it useful for AJAX requests and handling file uploads in web applications.


    const text = formData.get('text') as string;
    const person: Person = { name: text };
  };

  return (
    <section>
      <h2>events example</h2>
      <form onSubmit={handleSubmit} className='form'>
        <input
          className='form-input mb-1'
          type='text'
          name='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <input
          type='email'
          name='email'
          className='form-input mb-1'
          value={email}
          onChange={handleChange}
        />
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </section>
  );
}
export default Component;
