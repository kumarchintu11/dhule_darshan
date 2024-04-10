import React from "react";
import './mobile.css'
function Hotel() {
  return (
    <div>
      <header>
        <nav id="nav-bar">
          <div class="container">
            <h1 class="">Dhule Hotels</h1>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div>
        <div>
          <div >
            <h3>
              <p>
                <font color="grey">
                  <center>The art of meeting your highest expectations..</center>
                </font>
              </p>
            </h3>
            <h1>
              <center><span class>Enjoy</span> your Stay</center>
            </h1>
          </div>
        </div>
      </div>

      <section id="home-info">
        <p>
          <h2>
            <center><span class="primary-text">The History</span> of our City</center>
          </h2>
        </p>
        <center><h2>What is the old name of Dhule?</h2></center>
        <p>
          The District of Dhulia was previously known as WEST KHANDESH district.
          The ancient name of this region was Rasika. It is bounded on the east
          by Berar ( ancient Vidarbha ) , on the north by the Nemad district (
          ancient Anupa) and on the south by the Aurangabad ( ancient Mulaka )
          and Bhir ancient Asmaka districts.
        </p>
        <p>
          <li className="list-style-type: none">
            <a
              href="https://www.google.com/maps/place/Dhule,+Maharashtra/data=!4m2!3m1!1s0x3bdec5f2c571bb47:0x5827ae11b9d7cb1c?sa=X&ved=2ahUKEwjGmPajjOKEAxX47jgGHa2uACoQ8gF6BAgSEAA"
            >
              <center>Dhule</center>
            </a>
          </li>
        </p>
      </section>

      <section id="features">
        <div class="box bg-light">
          <i class="fas fa-hotel fa-3x" />
          <h3>Great Location</h3>

          <center>
            <h4>
              {" "}
              <center>Makes you feel at home</center>
            </h4>
            <li>
              <a
                href="https://www.google.com/maps/dir//suvarna+sparsh+hotel+dhule+map+location/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3bdec5ce5f1d3c97:0x8fe9ed0c483c5ece?sa=X&ved=2ahUKEwix2py3keKEAxVMcWwGHRZPDYMQ9Rd6BAgyEAA"
                class="bg-light"
              >
                Swarna Sparsh Resort
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/place/Hotel+Ganapati+Palace/@20.8926767,74.7736985,15z/data=!4m2!3m1!1s0x0:0x9e62539cfc95cb4f?sa=X&ved=2ahUKEwjVlfDZkuKEAxULwjgGHfZ9DMUQ_BJ6BAgMEAA"
                class="bg-light"
              >
                Hotel Ganpati Palace
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/dir//opposite+Railway+Station,+Green+Park,+Dhule,+Maharashtra+424001/@20.8889857,74.6864343,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bdec581a47cf531:0xa57244f34a84248f!2m2!1d74.768836!2d20.8890054?entry=ttu"
                class="bg-light"
              >
                Hotel Ruturaj Regency
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps?rlz=1C1CHBF_enIN1047IN1047&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCjE3OTc3ajBqMTWoAgCwAgA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KUkh4DXOx947Mbiiyr6WZf6q&daddr=Plot+No+3,+Mukund+Nagar+Survey+No+503/B+Malegaon+Road+Mumbai,+Highway,+next+to+The+Orchid,+Dhule,+Maharashtra+424001"
                class="bg-ligh"
              >
                Golden Leaf Resort
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/dir//Hotel+Jhankar+Palace,+B+P+Jain+Estate,+Mumbai+-+Agra+National+Hwy,+near+Gurudwara,+Samta+Nagar,+Dhule,+Maharashtra+424311/@20.869453,74.6881942,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3bdec60515c309e9:0x3b5d782b53c4336c!2m2!1d74.7705998!2d20.8694845?hl=en-GB&entry=ttu"
                class="bg-ligh"
              >
                Hotel Jhankar Palace
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/dir//Solapur+-+Dhule+National+Hwy,+MIDC+Avdhan,+Tikhi,+Maharashtra+424006/@20.8364274,74.67323,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3bdec64a3b880717:0xfab06528e65c7d4b!2m2!1d74.7556317!2d20.8364471?entry=ttu"
                class="bg-ligh"
              >
                Topline Resort
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/place/Hotel+Govind+Regency/@20.8893059,74.7725056,15z/data=!4m9!3m8!1s0x3bdec51a3d3ac28d:0x6e10972203396737!5m2!4m1!1i2!8m2!3d20.8893059!4d74.7725056!16s%2Fg%2F11vb4fhgnn?entry=ttu"
                class="bg-ligh"
              >
                Hotel Govind Regency
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/dir//21,+Royal+Rasraj,+Maharashtra+424005/@20.9330734,74.6956476,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bdec5d9a5150ae7:0xa49f154d26443985!2m2!1d74.7780624!2d20.9331634?entry=ttu"
                class="bg-ligh"
              >
                Royal Rasraj
              </a>
            </li>
          </center>
        </div>
        <div>
          <i class="fas fa-utensils fa-3x" />

          <h3>Family Restaurant</h3>
          <h4>
            <center>Enhancing life around great food.</center>
          </h4>
          <li>
            <a
              href="https://www.google.com/maps/dir//Chalisgaon+Road,+89%2F1,+Md.+Sabir+Rd,+near+Chhatrapati+Shivaji+Maharaj+Statue+Nagar,+Madhavpura,+Dhule,+Maharashtra+424001/@20.8943964,74.6926735,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bdec51653f699c9:0x6b0e51200e24b41d!2m2!1d74.7750752!2d20.8944161?entry=ttu"
              class="Best"
            >
              Hotel Savera
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/maps/dir/20.8718744,74.6525092/AT+HOTEL+JHANKAR+PALACE,+MUMBAI+AGRA+ROAD,+Dhule,+Maharashtra+424311/@20.8694685,74.6882147,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bdec60f8a107c15:0xc28e1aa1b01282d3!2m2!1d74.7706137!2d20.8694804?entry=ttu"
              class="Best"
            >
              Oregano Multi Cusine Restaurant
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/maps/dir//1,+Sakri+Rd,+Rasakar+Nagar,+Vidhya+Vihar+Colony,+Dhule,+Mahindale,+Maharashtra+424002/@20.9037051,74.672373,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bdec5bfae5d0dc3:0xc8b2d512e25389d7!2m2!1d74.7547747!2d20.9037249?entry=ttu"
              class="Best"
            >
              Gugli Restro
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/maps/dir//Near+khairnar+auto+service,+NH+6+Pr,+Sakri+Rd,+Morane,+Laling,+Maharashtra+424002/@20.903611,74.6739508,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bdec56d5c93282b:0x66f03ce44ddac65c!2m2!1d74.7563525!2d20.9036308?entry=ttu"
              class="Bestk"
            >
              Hotel Food Station
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/maps/dir//Krushnai+Food+Garden+Hotel,+Sr+No+123,+Plot+No+1,+Sakri+Road,+Near+Hanuman+Tekdi,+Mahindale,+Dhule,+Maharashtra+424001/@20.9036644,74.6575935,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bdec5f2c571bb47:0xa0b8be0873c42adc!2m2!1d74.7399952!2d20.9036842?entry=ttu"
              class="Best"
            >
              Taquila(Nisarg Pure Veg Restaurant)
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/maps/dir//Surat+by+pass,+Near+Juna+Toll+Naka,+beside+Balaji+Nagar,+Dhule,+Maharashtra+424001/@20.8910107,74.6686129,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bdec5b3d73c78e5:0xc574d7beb82fa04e!2m2!1d74.7510184!2d20.891042?entry=ttu"
              class="Best"
            >
              The Vairaj Restro
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/maps/dir//Vidhya+Vihar+Colony,+Dhule,+Mahindale,+Maharashtra+424001/@20.9045387,74.6606002,11.97z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bdec5b6fccbcc93:0x2c354b40009a548f!2m2!1d74.7422228!2d20.9037464?entry=ttu"
              class="Best"
            >
              Kazbah Restro & Lounge
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/maps/dir//First+Floor,+Pandav+Plaza,+80+Feet+Rd,+near+Railway+station,+Green+Park,+Dhule,+Maharashtra+424001/@20.888161,74.6875951,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bdec5fb210b4091:0xaa809597f158ac18!2m2!1d74.7699968!2d20.8881807?entry=ttu"
              class="Best"
            >
              Divine By Purnima
            </a>
          </li>
        </div>
      </section>
    <hr/>
    
    <footer id="main-footer">
        <p> Creat by Minal shinde</p>
        <p><center>2024</center></p>
    </footer>
    </div>
  );
}

export default Hotel;


