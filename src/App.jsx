import "./App.css";

import Content from "./components/Content";

const App = () => {
  const lorem25 =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia rerum quos temporibus doloremque assumenda neque illum error. Adipisci fugit ut optio in enim accusantium repellat tempora dolorem et beatae? Quis molestias enim, excepturi omnis vero, nihil nobis expedita quas exercitationem beatae provident, ducimus facilis sequi cumque quo necessitatibus dolor atque.";

  const lorem100 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dicta, maxime asperiores delectus, tenetur obcaecati consectetur animi, sequi magni eum odit deserunt fugit doloribus itaque? Deserunt veritatis qui, voluptatibus nostrum, quos accusantium eveniet excepturi voluptas reprehenderit ducimus eum temporibus sed dolore possimus modi rerum expedita, quibusdam saepe cupiditate ab aut reiciendis minus! Consectetur eaque nam aperiam unde nemo hic architecto fuga provident, quibusdam quod temporibus aspernatur, dolores doloremque tempore corporis et nesciunt odio sequi. Voluptas neque sed, tenetur odio officia reiciendis nulla harum amet itaque fugiat, eum, sunt laudantium fuga consequatur omnis sequi deleniti? Consequuntur culpa esse quae sed quaerat?";

  return (
    <>
      <Content bg="container-properties" name="Lorem" text={lorem25} />
      <Content bg="container-properties" name="Ipsum" text={lorem100} />

      {/* ------------------------------------------------------- */}
      {/* <div className="container-properties">
        <h1>Lorem</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ab
          ullam culpa quia placeat perspiciatis tempore natus error. Quam vel,
          illo enim deleniti in iure quaerat quae aut ipsam autem iste neque
          voluptates. Laboriosam necessitatibus libero sunt vel eveniet? Harum
          quia nobis nihil error corrupti autem? Fugit non pariatur veritatis!
        </p>
      </div>
      <div className="container-properties">
        <h1>Ipsum</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quasi
          tenetur doloremque esse inventore, assumenda tempore accusamus. Nihil
          repudiandae nobis sapiente nulla ipsum fugit hic ex deserunt nisi,
          possimus placeat ad ullam rerum eaque facilis temporibus quo quod
          omnis laborum consequuntur ipsam corporis laudantium quae. Modi
          reprehenderit aliquam possimus, quisquam quod cum quis doloremque,
          ipsa amet vitae accusamus accusantium perferendis. Possimus sed, modi
          hic explicabo tempora dolor provident qui voluptatum quibusdam. Eaque
          libero fugiat, esse, aut aliquid iusto aliquam ut pariatur maiores
          obcaecati dolorum fuga saepe eligendi facere. Ex unde dicta eos velit
          fuga impedit exercitationem tenetur consequatur alias doloremque.
        </p>
      </div> */}
    </>
  );
};

export default App;
