import '../../App.css';
import Accordion from '../../Components/Accordion/index';
import Table from '../../Components/Table/index';

function Course() {
// Até agr, tentando adicionar um component (table) dentro do component accordion
    return (
      <Accordion
      titulo="Aulas"
      descricao="Lista das Aulas deste curso">
          <Table/>
      </Accordion>
    );
  }
  
  export default Course;