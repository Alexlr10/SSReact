import { Switch, Route} from "react-router-dom";
import Aluno from "./components/Aluno";
import Perfil from "./components/Perfil";
import Dashboard from "./components/Dashboard";
import Professor from "./components/Professor";


const Routes = () => {
    return (
       
            <Switch>             
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/alunos" component={Aluno} />
                <Route exact path="/professores" component={Professor} />
                <Route exact path="/perfil" component={Perfil} />
                <Route exact path="/dashboard" component={Dashboard} />
                {/*  <Route exact path="*" component={Erro} /> */}
            </Switch>
      
    )
}

export default Routes;