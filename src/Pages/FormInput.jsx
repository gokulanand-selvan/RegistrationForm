import React from "react";
import styles from "../Css files/forminput.module.css";
import Typetext from "../Reuseable/Typetext";
import Typeselect from "../Reuseable/Typeselect";

export default function FormInput() {
  return (
    <div className={styles.formcontainer}>
      <div> Personal Detials:</div>
      <form>
        <div className={styles.personal}>
          <div> Name</div>
          <div className={styles.inputdiv}>
            <Typetext placeholder={"Enter Name"} width={"30em"} type={"text"} />
          </div>
          <div>Date of birth/Age</div>
          <div className={styles.inputdiv}>
            <Typetext
              placeholder={"Date of birth/Age in Years"}
              type={"number"}
            />
          </div>
          <div> Sex</div>
          <div className={styles.inputdiv}>
            <Typeselect />
          </div>
          <div>Mobile</div>
          <div className={styles.inputdiv}>
            <Typetext placeholder={"Enter Mobile Number"} type={"number"} />
          </div>
          <div>Govt Issued ID</div>
          <div className={styles.inputdiv}>
            <div style={{ display: "flex", gap: "1em" }}>
              <select name="ID Type" id="">
                <option value="Aadhar"> Aadhar </option>
                <option value="PAN"> PAN </option>
              </select>
              <input type="text" placeholder="Enter Govt ID" />
            </div>
          </div>
        </div>
      </form>
      {/* contact detials */}
      <br /> <br />
      <br /> <br />

      <form action="">
      <div>Contact Detials:</div>
      <div className={styles.guardianDetials} >
          <div>Guardian Detials:</div>
          <div>
            <Typetext type={"text"} placeholder={"Enter Guardian Name"} />
          </div>
          <div>Email</div>
          <div>
            <Typetext type={"email"} placeholder={"Enter Email"} />
          </div>
          <div>Emergency Number</div>
          <div>
            <Typetext type={"text"} placeholder={"Enter Emergency Number"} />
          </div>
        </div>
      </form>
      <br /> <br />
      <br /> <br />
      {/* Address */}
      <div>
        Address Detials:
      </div>
      <form>
      <div className={styles.personal}>
          <div>
            Address
            <textarea />
          </div>
          <div>State</div>
          <div>
            <select>
              <option value="">Enter State</option>
            </select>
          </div>
          <div>City</div>
          <div>
            <select>
              <option value="">Enter City/Town/village</option>
            </select>
          </div>
          <div>Country</div>
          <div>
            <Typetext type={"text"} placeholder={"EnterCountry"} />
          </div>
          <div>Pincode</div>
          <div>
            <Typetext type={"number"} placeholder={"Enter Pincode"} />
          </div>
        </div>
      </form>
      <br /> <br />
      <br /> <br /> 
      {/* other detials */}
      <div>
        Other Detials:
      </div>
      <form action="">
      <div className={styles.personal}>
          <div> Occupation</div>
          <div>
            <Typetext type={"text"} placeholder={"Enter Occupation"} />
          </div>
          <div>
            <div>Religion</div>
            <div>
              <select>
                <option value="">Enter Religion</option>
              </select>
            </div>
          </div>
          <div>
            <div>
              Marital Status
            </div>
            <div>
              <select name="" id="">
                <option value="">
                  Enter Marital status
                </option>
              </select>
            </div>
          </div>
          <div>
            <div>
              Blood Group
            </div>
            <div>
              <select name="" id="">
                <option value="">
                  Enter Blood Group
                </option>
              </select>
            </div>
          </div>
          <div>
            Nationality 
          </div>
          <div>
            <Typetext type={"text"} placeholder={"Enter Nationality"} />
          </div>
        </div>
      </form>
    </div>
  );
}
