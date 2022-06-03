import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
interface Props {
    children: React.ReactNode;
}
export const FormContainer: React.FC<Props> = ({ children }) => {
  return (
    <Container className='py-3'>
        <Row className='justify-content-md-center'>
            <Col xs={12} md={6}>
                {children}
            </Col>
        </Row>
    </Container>
  )
}
