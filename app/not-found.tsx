'use client'

import { blame } from "./blame";

import styles from "./styles/error.module.css";

export default function NotFound() {
    function blameFunc(e: any) {
        const person = e.target.id;

        blame(person);
        
        alert("Thanks for choosing who to blame.")
    }

    return (
        <div>
          <h2>404 Not Found</h2>
    
          <p>How did you get here? Well that doesnt really matter nothing is here, anyways who do you want to blame for something going wrong? (Dont worry you wont fire anyone ;)</p>
    
          <br />

          <div id="ethan" onClick={blameFunc} className={`${styles.person}`}>
            <img src='images/ethan-pfp.png' alt="Ethan's pfp" />

            <p>Ethan</p>
          </div>
        </div>
      );
};