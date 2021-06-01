import Titulo from "../Titulo";

export default function Aluno() {

/*     const [alunos, setAlunos] = useState([
        { nome: 'Marta' },
        { nome: 'Paula' },
        { nome: 'Laura' },
        { nome: 'Luiza' },
        { nome: 'Lucas' },
        { nome: 'Pedro' },
        { nome: 'Paulo' },
    ]); */

    const alunos = [
        { nome: 'Marta' },
        { nome: 'Paula' },
        { nome: 'Laura' },
        { nome: 'Luiza' },
        { nome: 'Lucas' },
        { nome: 'Pedro' },
        { nome: 'Paulo' },
    ]

    const titulo = 'Alunos';

    return (
        <div>
            <h1>
                <Titulo/>
            </h1>
            <ul>
                {alunos.map((aluno) => {
                    return (
                        <li key={aluno.nome}>{aluno.nome}</li>
                    );
                })}
            </ul>
        </div>


    )
}