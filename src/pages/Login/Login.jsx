import { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import { useAuth } from '../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';




export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default HTML form submission
    // console.log('Form submitted:', { email, password });

    const formData = new FormData(event.currentTarget)
    const username = formData.get('username')
    console.log('username', username)
    auth.singin(username, () => {
      navigate('/')
    })
    // Add further logic here (e.g., API call)
  };


  return (
    <div className='container d-flex justify-content-center align-items-center  '>
      <div className='mt-20 w-50'>
        <h1>регистрация</h1>
        <Form className=' border border-primary' onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

      </div>


    </div>

  )
}
