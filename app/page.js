'use client'

import { useEffect, useState } from "react";

import "./quiz.css"
import "./tabela.css"

function Moto() {
    const [p1, alteraP1] = useState(0);
    const [p2, alteraP2] = useState(0);
    const [p3, alteraP3] = useState(0);
    const [p4, alteraP4] = useState(0);
    const [p5, alteraP5] = useState(0);
    const [p6, alteraP6] = useState(0);
    const [p7, alteraP7] = useState(0);
    const [p8, alteraP8] = useState(0);
    const [p9, alteraP9] = useState(0);
    const [p10, alteraP10] = useState(0);
    const [p11, alteraP11] = useState(0);
    const [p12, alteraP12] = useState(0);
    const [p13, alteraP13] = useState(0);
    const [p14, alteraP14] = useState(0);
    const [p15, alteraP15] = useState(0);

    const [ver1, alteraVerP1] = useState(false);
    const [ver2, alteraVerP2] = useState(false);
    const [ver3, alteraVerP3] = useState(false);
    const [ver4, alteraVerP4] = useState(false);
    const [ver5, alteraVerP5] = useState(false);
    const [ver6, alteraVerP6] = useState(false);
    const [ver7, alteraVerP7] = useState(false);
    const [ver8, alteraVerP8] = useState(false);
    const [ver9, alteraVerP9] = useState(false);
    const [ver10, alteraVerP10] = useState(false);
    const [ver11, alteraVerP11] = useState(false);
    const [ver12, alteraVerP12] = useState(false);
    const [ver13, alteraVerP13] = useState(false);
    const [ver14, alteraVerP14] = useState(false);
    const [ver15, alteraVerP15] = useState(false);
    const [verInicio, alterarVerInicio] = useState(true);
    const [verFinal, alteraVerFinal] = useState(false);

    const [ranking, setRanking] = useState([]);  // Ranking array
    const [userName, setUserName] = useState(""); // For capturing the user's name

    useEffect(() => {
        const savedRanking = JSON.parse(localStorage.getItem("ranking")) || [];
        setRanking(savedRanking);
    }, []);

    // Save ranking to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("ranking", JSON.stringify(ranking));
    }, [ranking]);

    const handleFinishQuiz = () => {
        if (!userName) {
            alert("Por favor, insira seu nome antes de finalizar.");
            return;
        }

        // Calculate score
        const score = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9 + p10 + p11 + p12 + p13 + p14 + p15;

        // Save user score to ranking
        const newRanking = [...ranking, { name: userName, score }];
        // Sort by score (descending order)
        newRanking.sort((a, b) => b.score - a.score);

        setRanking(newRanking); 
        alteraVerFinal(true); 
    };

    return ( 
        <div>
            {/* <img src="/public/img/roxo.jfif" alt=""/> */}
            {
                verInicio == true &&
                <div className="inicio" >
                    <h1 className='letramaior'>Quiz sobre motos</h1>
                    <p>Teste seus conhecimentos sobre motos com nosso quiz interativo!</p> <br/> <br/>
                    <button className='btn' onClick={ ()=> {alterarVerInicio(false); alteraVerP1(true)} }>Iniciar</button>
                </div>
            }




    
            {
                ver1 == true &&
    
                <div className="inicio">
                    <p>1. Qual o apelido da Yamaha RD 350?</p>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Mônica</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Sete Gallo</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(1)}/>Viúva Negra</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Tucunaré</label>

                    <br/>

                    <button className="btn" onClick={ ()=> {alteraVerP1(false) ;alteraVerP2(true)} }>Próximo</button>
                </div>
            }

{
                ver2 == true &&
    
                <div className="inicio">
                    <p>2. Qual é a principal característica da moto Harley-Davidson Softail?</p>
                    <label><input name="p2" type="radio" onChange={ ()=> alteraP2(0)}/>Estrutura com chassi rígido</label>
                    <br/>
                    <label><input name="p2" type="radio" onChange={ ()=> alteraP2(1)}/>Suspensão traseira oculta</label>
                    <br/>
                    <label><input name="p2" type="radio" onChange={ ()=> alteraP2(0)}/>Motor de 1200cc</label>
                    <br/>
                    <label><input name="p2" type="radio" onChange={ ()=> alteraP2(0)}/>Carenagem esportiva</label>
                    <br/>

                    <button className="btn" onClick={ ()=> {alteraVerP2(false) ;alteraVerP3(true)} } >Próximo</button>
                </div>
            }
            

{
                ver3 == true &&
    
                <div className="inicio">
                    <p>3. Em que ano a Honda XRE 300 foi lançada no Brasil?</p>
                    <label><input name="p3" type="radio" onChange={ ()=> alteraP3(0)}/>2005</label>
                    <br/>
                    <label><input name="p3" type="radio" onChange={ ()=> alteraP3(0)}/>2008</label>
                    <br/>
                    <label><input name="p3" type="radio" onChange={ ()=> alteraP3(1)}/>2010</label>
                    <br/>
                    <label><input name="p3" type="radio" onChange={ ()=> alteraP3(0)}/>2012</label>

                    <br/>

                    <button className='btn' onClick={ ()=> {alteraVerP3(false) ;alteraVerP4(true)} } >Próximo</button>
                </div>
}

{
                ver4 == true &&
    
                <div className="inicio">
                    <p>4. Qual a cilindrada da moto Kawasaki Ninja 300, que foi muito popular no Brasil?</p>
                    <label><input name="p4" type="radio" onChange={ ()=> alteraP4(0)}/>150cc</label>
                    <br/>
                    <label><input name="p4" type="radio" onChange={ ()=> alteraP4(1)}/>300cc</label>
                    <br/>
                    <label><input name="p4" type="radio" onChange={ ()=> alteraP4(0)}/>500cc</label>
                    <br/>
                    <label><input name="p4" type="radio" onChange={ ()=> alteraP4(0)}/>650cc</label>

                    <br/>

                    <button className='btn' onClick={ ()=> {alteraVerP4(false) ;alteraVerP5(true)} } >Próximo</button>
                </div>
            }

{
                ver5 == true &&
    
                <div className="inicio">
                    <p>5. Qual modelo da Honda foi considerado um ícone das motos de baixa cilindrada no Brasil na década de 1980?</p>
                    <label><input name="p5" type="radio" onChange={ ()=> alteraP5(0)}/>Honda CB 500</label>
                    <br/>
                    <label><input name="p5" type="radio" onChange={ ()=> alteraP5(0)}/>Honda XR 250</label>
                    <br/>
                    <label><input name="p5" type="radio" onChange={ ()=> alteraP5(1)}/>Honda CG 125</label>
                    <br/>
                    <label><input name="p5" type="radio" onChange={ ()=> alteraP5(0)}/>Honda Titan 150</label>

                    <br/>

                    <button className='btn' onClick={ ()=> {alteraVerP5(false) ;alteraVerP6(true)} } >Próximo</button>
                </div>
            }

{
                ver6 == true &&
    
                <div className="inicio">
                    <p>6. A qual marca pertence a moto esportiva conhecida como CBR 1000RR?</p>
                    <label><input name="p6" type="radio" onChange={ ()=> alteraP6(0)}/>Yamaha</label>
                    <br/>
                    <label><input name="p6" type="radio" onChange={ ()=> alteraP6(0)}/>Suzuki</label>
                    <br/>
                    <label><input name="p6" type="radio" onChange={ ()=> alteraP6(0)}/>Kawasaki</label>
                    <br/>
                    <label><input name="p6" type="radio" onChange={ ()=> alteraP6(1)}/>Honda</label>

                    <br/>

                    <button className='btn' onClick={ ()=> {alteraVerP6(false) ;alteraVerP7(true)} } >Próximo</button>
                </div>
            }

{
                ver7 == true &&
    
                <div className="inicio">
                    <p>7. Qual a principal característica da motocicleta Harley-Davidson Iron 883, que foi popular no Brasil?</p>
                    <label><input name="p7" type="radio" onChange={ ()=> alteraP7(1)}/>Motor V-twin de 883cc</label>
                    <br/>
                    <label><input name="p7" type="radio" onChange={ ()=> alteraP7(0)}/>Motor 4 cilindros em linha</label>
                    <br/>
                    <label><input name="p7" type="radio" onChange={ ()=> alteraP7(0)}/>Design esportivo</label>
                    <br/>
                    <label><input name="p7" type="radio" onChange={ ()=> alteraP7(0)}/>Pneus largos para off-road</label>

                    <br/>

                    <button className='btn' onClick={ ()=> {alteraVerP7(false) ;alteraVerP8(true)} } >Próximo</button>
                </div>
            }

{
                ver8 == true &&
    
                <div className="inicio">
                    <p>8. Qual era o apelido da Honda XLX 350R? </p>
                    <label><input name="p8" type="radio" onChange={ ()=> alteraP8(1)}/>Xiselão</label>
                    <br/>
                    <label><input name="p8" type="radio" onChange={ ()=> alteraP8(0)}/>Xiselinha</label>
                    <br/>
                    <label><input name="p8" type="radio" onChange={ ()=> alteraP8(0)}/>Tucunaré</label>
                    <br/>
                    <label><input name="p8" type="radio" onChange={ ()=> alteraP8(0)}/>Van Gogh</label>

                    <br/>

                    <button className='btn' onClick={ ()=> {alteraVerP8(false) ;alteraVerP9(true)} } >Próximo</button>
                </div>
            }

{
                ver9 == true &&
    
                <div className="inicio">
                    <p>9. A Honda CRF 230F é uma moto voltada para qual tipo de uso?</p>
                    <label><input name="p9" type="radio" onChange={ ()=> alteraP9(1)}/>Enduro e off-road</label>
                    <br/>
                    <label><input name="p9" type="radio" onChange={ ()=> alteraP9(0)}/>Estrada e viagens longas</label>
                    <br/>
                    <label><input name="p9" type="radio" onChange={ ()=> alteraP9(0)}/>Circuitos de motocross</label>
                    <br/>
                    <label><input name="p9" type="radio" onChange={ ()=> alteraP9(0)}/>Uso urbano e street</label>

                    <br/>

                    <button className='btn' onClick={ ()=> {alteraVerP9(false) ;alteraVerP10(true)} } >Próximo</button>
                </div>
            }

{
                ver10 == true &&
    
                <div className="inicio">
                    <p>10. Qual modelo da Yamaha foi lançado no Brasil como uma versão de entrada para a linha de motos esportivas?</p>
                    <label><input name="p10" type="radio" onChange={ ()=> alteraP10(1)}/>Yamaha R3</label>
                    <br/>
                    <label><input name="p10" type="radio" onChange={ ()=> alteraP10(0)}/>Yamaha MT-07</label>
                    <br/>
                    <label><input name="p10" type="radio" onChange={ ()=> alteraP10(0)}/>Yamaha YZF-R1</label>
                    <br/>
                    <label><input name="p10" type="radio" onChange={ ()=> alteraP10(0)}/>Yamaha XTZ 250</label>

                    <br/>

                    <button className='btn' onClick={ ()=> {alteraVerP10(false) ;alteraVerP11(true)} } >Próximo</button>
                </div>
            }

{
                ver11 == true &&
    
                <div className="inicio" >
                    <p>11. Qual foi a primeira moto japonesa a ser vendida no Brasil?</p>
                    <label><input name="p11" type="radio" onChange={ ()=> alteraP11(0)}/>Honda CB 750</label>
                    <br/>
                    <label><input name="p11" type="radio" onChange={ ()=> alteraP11(1)}/>Yamaha RD 350</label>
                    <br/>
                    <label><input name="p11" type="radio" onChange={ ()=> alteraP11(0)}/>Kawasaki Z1000</label>
                    <br/>
                    <label><input name="p11" type="radio" onChange={ ()=> alteraP11(0)}/>Suzuki Titan 125</label>

                    <br/>

                    <button className='btn' onClick={ ()=> {alteraVerP11(false) ;alteraVerP12(true)} } >Próximo</button>
                </div>
            }

{
                ver12 == true &&
    
                <div className="inicio">
                    <p>12. Qual foi o principal modelo de motocicleta da Kawasaki utilizado em competições de Superbike no Brasil?</p>
                    <label><input name="p12" type="radio" onChange={ ()=> alteraP12(0)}/>Kawasaki Ninja 300</label>
                    <br/>
                    <label><input name="p12" type="radio" onChange={ ()=> alteraP12(0)}/>Kawasaki Z800</label>
                    <br/>
                    <label><input name="p12" type="radio" onChange={ ()=> alteraP12(1)}/>Kawasaki Ninja ZX-10R</label>
                    <br/>
                    <label><input name="p12" type="radio" onChange={ ()=> alteraP12(0)}/>Kawasaki Versys 650</label>

                    <br/>

                    <button className='btn' onClick={ ()=> {alteraVerP12(false) ;alteraVerP13(true)} } >Próximo</button>
                </div>
            }

{
                ver13 == true &&
    
                <div className="inicio" >
                    <p>13. Qual a principal inovação da moto Ducati Monster 1200 que foi lançada no Brasil em 2014?</p>
                    <label><input name="p13" type="radio" onChange={ ()=> alteraP13(0)}/>Motor com turbo</label>
                    <br/>
                    <label><input name="p13" type="radio" onChange={ ()=> alteraP13(0)}/>Sistema de suspensão adaptativo</label>
                    <br/>
                    <label><input name="p13" type="radio" onChange={ ()=> alteraP13(1)}/>Design naked e motor de 1198cc</label>
                    <br/>
                    <label><input name="p13" type="radio" onChange={ ()=> alteraP13(0)}/>Sistema de frenagem ABS</label>

                    <br/>

                    <button className='btn' onClick={ ()=> {alteraVerP13(false) ;alteraVerP14(true)} } >Próximo</button>
                </div>
            }

            {
                ver14 == true &&
    
                <div className="inicio">
                    <p>14. Qual moto é famosa por ser a "moto da polícia" no Brasil?</p>
                    <label><input name="p14" type="radio" onChange={ ()=> alteraP14(0)}/>Yamaha XT 660</label>
                    <br/>
                    <label><input name="p14" type="radio" onChange={ ()=> alteraP14(0)}/>Honda CB 500X</label>
                    <br/>
                    <label><input name="p14" type="radio" onChange={ ()=> alteraP14(1)}/>Harley-Davidson Road King</label>
                    <br/>
                    <label><input name="p14" type="radio" onChange={ ()=> alteraP14(0)}/>BMW R 1200 RT</label>

                    <br/>

                    <button className='btn' onClick={ ()=> {alteraVerP14(false) ;alteraVerP15(true)} } >Próximo</button>
                </div>
            }

            {
                ver15 == true &&
    
                <div className="inicio">
                    <p>15. Qual era o nome original da Bico de Pato? </p>
                    <label><input name="p15" type="radio" onChange={ ()=> alteraP15(1)}/>Suzuki DR800</label>
                    <br/>
                    <label><input name="p15" type="radio" onChange={ ()=> alteraP15(0)}/>Yamaha Crosser </label>
                    <br/>
                    <label><input name="p15" type="radio" onChange={ ()=> alteraP15(0)}/>CBR 450 SR</label>
                    <br/>
                    <label><input name="p15" type="radio" onChange={ ()=> alteraP15(0)}/>CB 250</label>

                    <br/>

                    <button  className='btn' onClick={ ()=> {alteraVerP15(false) ; alteraVerFinal(true)} } >Próximo</button>
                </div>
            }

            {               
                verFinal == true && (
                    <div className="inicio" >
                        
                    <h1>Resultado</h1>
                    <p>Nota: {p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9 + p10 + p11 + p12 + p13 + p14 + p15}</p>

                    {/* User name input field */}
                    <div >
                        <label>Insira seu nome: </label>
                        <br/>
                        <input 
                            type="text" 
                            value={userName} 
                            onChange={(e) => setUserName(e.target.value)} 
                            placeholder="Digite seu nome aqui"
                        />
                    </div>
                        <br/>
                    {/* Button to finalize quiz */}
                    <button  className='btn' onClick={handleFinishQuiz}>Finalizar Quiz</button>

                    {/* Display ranking as a table */}
                    <h2>Ranking</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Posição</th>
                                <th className="espacoNome" >Nome</th>
                                <th>Pontuação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ranking.map((user, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td className="espacoNome" >{user.name}</td>
                                    <td>{user.score}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        
            
            </div>

        
        
    );
}

export default Moto;