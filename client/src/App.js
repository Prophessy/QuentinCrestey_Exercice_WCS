import './App.css';
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from "react";

function App() {

  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  const initialValues = {
    postText: "",
};

const validationSchema = Yup.object().shape({
  postText: Yup.string().required("Vous devez mettre un nom d'argonaute :)")
});

const onSubmit = (data) => {
  axios.post("http://localhost:3001/posts", data).then((response) => {
      window.location.reload();
    });
};

  return (
    <div>
    <header>
  <h1>
    <img src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" />
    Les Argonautes
  </h1>
</header>

<main>
  <h2>Ajouter un(e) Argonaute</h2>
  
  <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className='new-member-form'>
                <label>Nom de l&apos;Argonaute </label>
                <ErrorMessage name='postText' component="span"/>
                <Field id="name" name="postText" placeholder="Charalampos"/>
                <button type="submit">Envoyer</button>
            </Form>
        </Formik>

  <h2>Membres de l'équipage</h2>
  <section className="member-list">
  {listOfPosts.map((value) => {
    return (
        <div className="member-item" key={value.id}> {value.postText} </div>
    );
  })}
  </section>
</main>

<footer>
  <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
</footer>
</div>
  );
}

export default App;
