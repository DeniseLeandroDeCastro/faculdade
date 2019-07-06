var express = require('express');
var con = require('./bd');
var app = express();
var bp = require('body-parser');

app.use(express.static('views'));
app.use(bp.urlencoded({extended: false}));
app.use(express.json());

aluno = [{ matricula: 0, nomealuno: '', periodo: 0, curso: ''}];

app.listen(3000, () => {
    con.connect((erro)=> {
        if(!erro) {console.log('BD conectado');
    } else {
        console.log('Erro: ' + erro.sqlMessage);
    }
    });
});

app.get('/', (req, res) => {
    res.json({ aluno });
});

app.get('/aluno/:nome', (req, res) => {
    var nm = req.params.nome;
    res.send('<p>' + nm + '</p>');
});

app.get('/aluno', (req, res) => {
    var sql = 
    'SELECT matricula, nomealuno, nomecurso, periodo from tbaluno a inner join tbcurso c on a.curso=c.idcurso and a.periodo=3';
    con.query(sql, (erro, resultado) => {
        if(!erro) {
            res.send({status: true, res: resultado});
        } else {
            res.send({status: false, res: erro.sqlMessage});
        }
    });
});


app.post('/aluno', (req, res) => {
    var nome = req.body.nome;
    res.send(nome);
});

app.post('/add',(req, res)=>{
    var resultado = req.body;
    if(!resultado){
        return res.status(400).end();
    }
    aluno.push(result);
    return res.json({ resultado });
});





