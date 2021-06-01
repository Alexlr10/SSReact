import Titulo from "../Titulo";

export default function Aluno() {

    /*     const [alunos, setAlunos] = useState([
            { id, 1, nome: 'Marta', sobrenome: 'kent', telefone: 332255 },
        { id, 2, nome: 'Paula', sobrenome: 'Isabela', telefone: 456456 },
        { id, 3, nome: 'Laura', sobrenome: 'Antonia', telefone: 7686786 },
        { id, 4, nome: 'Luiza', sobrenome: 'Maria', telefone: 678678 },
        { id, 5, nome: 'Lucas', sobrenome: 'Machado', telefone: 6786786687 },
        { id, 6, nome: 'Pedro', sobrenome: 'Alvares', telefone: 332255 },
        { id, 7, nome: 'Paulo', sobrenome: 'Jose', telefone: 27527275 },
        ]); */

    const alunos = [
        { id: 1, nome: 'Marta', sobrenome: 'kent', telefone: 332255 },
        { id: 2, nome: 'Paula', sobrenome: 'Isabela', telefone: 456456 },
        { id: 3, nome: 'Laura', sobrenome: 'Antonia', telefone: 7686786 },
        { id: 4, nome: 'Luiza', sobrenome: 'Maria', telefone: 678678 },
        { id: 5, nome: 'Lucas', sobrenome: 'Machado', telefone: 6786786687 },
        { id: 6, nome: 'Pedro', sobrenome: 'Alvares', telefone: 332255 },
        { id: 7, nome: 'Paulo', sobrenome: 'Jose', telefone: 27527275 },

    ]

    const titulo = 'Alunos';

    return (
        <div>
            <h1>
                <Titulo Titulo={titulo} />
            </h1>
           
            <table class="table">
                <thead class="table-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Sobrenome</th>
                        <th scope="col">telefone</th>
                    </tr>
                </thead>

                {alunos.map((aluno) => {
                    return (
                        
                            <tbody>
                                <tr>
                                    <th scope="row">{aluno.id}</th>
                                    <td>{aluno.nome}</td>
                                    <td>{aluno.sobrenome}</td>
                                    <td>{aluno.telefone}</td>
                                </tr>
                            </tbody>
                     
                    )
                })}

            </table>


        </div>


    )
}