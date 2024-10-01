import React from 'react';
import './App.css'; // Asegúrate de tener un archivo App.css para los estilos

function App() {
    const calculateResult = () => {
        const answers = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 };
        const form = document.forms["quizForm"];

        // Recorre las preguntas y acumula las respuestas
        for (let i = 1; i <= 5; i++) {
            const selected = form["q" + i].value;
            if (selected) {
                answers[selected]++;
            }
        }

        // Encuentra la respuesta mayoritaria
        let maxAnswer = 'a';
        for (const key in answers) {
            if (answers[key] > answers[maxAnswer]) {
                maxAnswer = key;
            }
        }

        // Define los resultados según la respuesta mayoritaria
        let result;
        switch (maxAnswer) {
            case 'a':
                result = "Empreendedor do ano";
                break;
            case 'b':
                result = "Sport";
                break;
            case 'c':
                result = "Noivo perfeito";
                break;
            case 'd':
                result = "Nice man";
                break;
            case 'e':
                result = "Familiar";
                break;
            case 'f':
                result = "Party man";
                break;
        }

        // Muestra el resultado en el pop-up
        document.getElementById("resultText").textContent = "Seu estilo é: " + result;
        document.getElementById("resultModal").style.display = "flex";
    };

    const closeModal = () => {
        document.getElementById("resultModal").style.display = "none";
    };

    return (
        <div className="quiz-container">
 <div className="quiz-container">
    <h1>Que estilo você procura?</h1>
    <form id="quizForm">
        {/* Pergunta 1 */}
        <div className="question">
            <p>1. Qual é a sua atividade favorita durante o tempo livre?</p>
            <label><input type="radio" name="q1" value="a" /> Eventos profissionais. (Empreendedor do ano)</label>
            <label><input type="radio" name="q1" value="b" /> Pratique esportes ou atividades ao ar livre. (Sport)</label>
            <label><input type="radio" name="q1" value="c" /> Preparativos para eventos especiais. (Noivo perfeito)</label>
            <label><input type="radio" name="q1" value="d" /> Saia com amigos. (Nice man)</label>
            <label><input type="radio" name="q1" value="e" /> Passe algum tempo com a família. (Familiar)</label>
            <label><input type="radio" name="q1" value="f" /> Participe de festas. (Party man)</label>
        </div>

        {/* Pergunta 2 */}
        <div className="question">
            <p>2. Como você descreveria sua abordagem à moda?</p>
            <label><input type="radio" name="q2" value="a" /> Elegante e profissional. (Empreendedor do ano)</label>
            <label><input type="radio" name="q2" value="b" /> Casual e confortável. (Sport)</label>
            <label><input type="radio" name="q2" value="c" /> Refinado e sofisticado. (Noivo perfeito)</label>
            <label><input type="radio" name="q2" value="d" /> Atraente e versátil. (Nice man)</label>
            <label><input type="radio" name="q2" value="e" /> Descontraído e confortável. (Familiar)</label>
            <label><input type="radio" name="q2" value="f" /> Na moda. (Party man)</label>
        </div>

        {/* Pergunta 3 */}
        <div className="question">
            <p>3. Que tipo de eventos você prefere participar?</p>
            <label><input type="radio" name="q3" value="a" /> Eventos corporativos. (Empreendedor do ano)</label>
            <label><input type="radio" name="q3" value="b" /> Competições esportivas. (Sport)</label>
            <label><input type="radio" name="q3" value="c" /> Casamentos, aniversários e comemorações pessoais. (Noivo perfeito)</label>
            <label><input type="radio" name="q3" value="d" /> Reuniões sociais, jantares e passeios com amigos. (Nice man)</label>
            <label><input type="radio" name="q3" value="e" /> Atividades familiares, reuniões e jantares em casa. (Familiar)</label>
            <label><input type="radio" name="q3" value="f" /> Concertos, clubes e eventos noturnos. (Party man)</label>
        </div>

        {/* Pergunta 4 */}
        <div className="question">
            <p>4. O que é mais importante para você na hora de escolher uma roupa?</p>
            <label><input type="radio" name="q4" value="a" /> Impressão profissional e elegância. (Empreendedor do ano)</label>
            <label><input type="radio" name="q4" value="b" /> Conforto e desempenho nas atividades. (Sport)</label>
            <label><input type="radio" name="q4" value="c" /> Estilo e impacto em ocasiões especiais. (Noivo perfeito)</label>
            <label><input type="radio" name="q4" value="d" /> Capacidade de adaptação a diferentes situações sociais. (Nice man)</label>
            <label><input type="radio" name="q4" value="e" /> Conforto e abordagem casual para a vida cotidiana. (Familiar)</label>
            <label><input type="radio" name="q4" value="f" /> A capacidade de se destacar. (Party man)</label>
        </div>

        {/* Pergunta 5 */}
        <div className="question">
            <p>5. Como você se sente mais confiante consigo mesmo?</p>
            <label><input type="radio" name="q5" value="a" /> Com uma aparência polida e profissional que projeta confiança. (Empreendedor do ano)</label>
            <label><input type="radio" name="q5" value="b" /> Com roupa que permite liberdade de movimentos e funcionalidade. (Sport)</label>
            <label><input type="radio" name="q5" value="c" /> Com um estilo requintado que se destaca em eventos especiais. (Noivo perfeito)</label>
            <label><input type="radio" name="q5" value="d" /> Com uma roupa que faz você se destacar nas reuniões sociais. (Nice man)</label>
            <label><input type="radio" name="q5" value="e" /> Com um estilo descontraído e confortável para momentos em família. (Familiar)</label>
            <label><input type="radio" name="q5" value="f" /> Com um visual fashion que faz você brilhar em eventos noturnos. (Party man)</label>
        </div>

        <button type="button" onClick={calculateResult}>Enviar</button>
    </form>
</div>


            {/* Modal para mostrar el resultado */}
            <div id="resultModal" className="modal" style={{ display: 'none' }}>
                <div className="modal-content">
                    <p className="result-text" id="resultText"></p>
                    <button className="close-button" onClick={closeModal}>Fechar</button>
                </div>
            </div>
        </div>
    );
}

export default App;
