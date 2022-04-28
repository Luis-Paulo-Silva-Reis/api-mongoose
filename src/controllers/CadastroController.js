import Cadastro from "../models/Cadastro.js";

class cadastroController {
  static listarCadastros = (req, res) => {
    Cadastro.find((err, Cadastro) => {
      res.status(200).json(Cadastro);
    });
  };

  static listarCadastroporid = (req, res) =>{
    const id = req.params.id;

    Cadastro.findById(id, (err, Cadastro )=>{
      if(err){
        res.status(400).send({message: `${err.message} - 'Id do usuario não encontrado '`})
      }else{
        res.status(200).send(Cadastro);
      }
    })
  }

  static cadastrarUsuario = (req, res) => {
    let cadastro = new Cadastro(req.body);

    cadastro.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} falhao ao cadastrar o usuario` });
      } else {
        res.status(201).send(cadastro.toJSON());
      }
    });
  };

  static atualizarCadastro = (req, res) =>{
    const id = req.params.id;
    
    Cadastro.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
      if(!err){
        res.status(200).send({message: 'Cadastroa atualizado com sucesso'})
      }else{
        res.status(500).send({message: err.message})
      }
    })
  };

  static excluirCadastro = (req, res) => {
    const id = req.params.id;

    Cadastro.findByIdAndDelete(id, (err) =>{
      if(!err){
        res.status(200).send({message: "Cadastro removido com sucesso"})
      }else{
        res.status(500).send({message: err.message})
      }
    })

  }


}

export default cadastroController;
