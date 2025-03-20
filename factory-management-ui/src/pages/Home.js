// import React from "react";

// function Home() {
//   return (
//     <div className="bg-light d-flex align-items-center">
//         <div className="row align-items-center">
//           {/* SOL TARAF: RESİM */}
//           <div className="col-lg-6 d-flex justify-content-center">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
//               alt="Avatar"
//               className="img-fluid rounded-circle shadow-lg"
//               style={{ maxWidth: "80%" }}
//             />
//           </div>

//           {/* SAĞ TARAF: METİN */}
//           <div className="col-lg-6 text-center text-lg-start">
//             <h1 className="fw-bold text-primary">Fabrika Yönetimine Hoşgeldiniz</h1>
//             <p className="lead">
//               Fabrikanızı modern bir şekilde yönetin. Çalışanlarınızı takip edin, siparişleri yönetin ve üretim süreçlerini optimize edin.
//             </p>
//             <a href="/dashboard" className="btn btn-primary btn-lg mt-3">
//               Başlayın
//             </a>
//           </div>
//         </div>
//     </div>
//   );
// }

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function NavPillsExample() {
  return (
    <Card>
      <Card.Header>
        <Nav variant="pills" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="#first">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default NavPillsExample;