import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import {Link} from 'react-router-dom';

export const WordleInstructions = () => {
  return (
    <div>
        <Header/>
        <Link to='/wordle'>X</Link>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
        deserunt quasi quas tenetur, animi accusamus magni a consequatur, in est
        ducimus consectetur eius corrupti, amet praesentium! Repudiandae ipsam
        sapiente ad!
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio omnis
        praesentium obcaecati consequatur excepturi et quisquam quis, ad
        perspiciatis repudiandae sapiente quasi, quae aspernatur voluptatum
        totam, tempora distinctio nemo sint.
      </p>
      <Footer/>
    </div>
  );
};