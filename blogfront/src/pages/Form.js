import {useState} from 'react'

const Form = (props) => {
    const [formData, setFormData] = useState({
        title: '',
        body: ''
    })

    const handleChange = (event) => {
        setFormData((prev) => (
            { 
                ...prev, 
                [event.target.name]: event.target.value 
            }
            ))
    }

    const handleSubmisson = (event) => {
        event.preventDefault();
        props.handleSubmit(formData, props.formType)
    }

 return (
    <form onSubmit={handleSubmisson}> 
      <input
        type="text"
        onChange={handleChange}
        value={formData.title}
        name="title"
      />
      <input
        type="text"
        onChange={handleChange}
        value={formData.body}
        name="body"
      />
      <input type="submit" value={props.buttonLabel} />
    </form>
  );
};

export default Form