"use client";

import { useEffect, useState } from "react";

import "./quiz.css";
import "./tabela.css";

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

	const [selecionado, alteraSelecionado] = useState(["", "", "", ""]);

	const [ranking, setRanking] = useState([]); // Ranking array
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
			{verInicio == true && (
				<div className="inicio">
					<h1 className="letramaior">Quiz sobre motos</h1>
					<p>Teste seus conhecimentos sobre motos com nosso quiz interativo!</p> <br /> <br />
					<img width="400px" src="https://mobilidade.estadao.com.br/wp-content/uploads/2023/03/nova-bmw-s-1000-rr_1.jpg" />
					<br />
					<br />
					<button
						className="btn"
						onClick={() => {
                            alteraSelecionado(["", "", "", ""]);
							alterarVerInicio(false);
							alteraVerP1(true);
						}}>
						Iniciar
					</button>
				</div>
			)}

			{ver1 == true && (
				<div className="inicio">
					<p>1. Qual o apelido da Yamaha RD 350?</p>

					<img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/c62e02120929765.60bb7d9bc9f44.jpg" width="400px" />

					<div className={"options"}>
						<label className={"option " + selecionado[0]}>
							<input
								name="p1"
								type="radio"
								className={"option " + selecionado[0]}
								onChange={() => alteraP1(0) + alteraSelecionado(["selecionado", "", "", ""])}
							/>
							Mônica
						</label>
						<br />
						<label className={"option " + selecionado[1]}>
							<input
								name="p1"
								type="radio"
								className={"option " + selecionado[0]}
								onChange={() => alteraP1(0) + alteraSelecionado(["", "selecionado", "", ""])}
							/>
							Sete Gallo
						</label>
						<br />
						<label className={"option " + selecionado[2]}>
							<input
								name="p1"
								type="radio"
								className={"option " + selecionado[0]}
								onChange={() => alteraP1(1) + alteraSelecionado(["", "", "selecionado", ""])}
							/>
							Viúva Negra
						</label>
						<br />
						<label className={"option " + selecionado[3]}>
							<input
								name="p1"
								type="radio"
								className={"option " + selecionado[0]}
								onChange={() => alteraP1(0) + alteraSelecionado(["", "", "", "selecionado"])}
							/>
							Tucunaré
						</label>
					</div>
					<br />

					<button
						className="btn"
						onClick={() => {
                            alteraSelecionado(["", "", "", ""]);
							alteraVerP1(false);
							alteraVerP2(true);
						}}>
						Próximo
					</button>
				</div>
			)}

			{ver2 == true && (
				<div className="inicio">
					<p>2. Qual é a principal característica da moto Harley-Davidson Softail?</p>

					<img width="400px" src="https://media-cdn.tripadvisor.com/media/photo-s/16/04/e2/18/a-harley-davidson-softail.jpg" />
					<div className="options">
						<label className={"option " + selecionado[0]}>
							<input name="p2" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP2(0)+alteraSelecionado(["selecionado", "", "", ""])} />
							Estrutura com chassi rígido
						</label>
						<br />
						<label className={"option " + selecionado[1]}>
							<input name="p2" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP2(1)+alteraSelecionado(["", "selecionado", "", ""])} />
							Suspensão traseira oculta
						</label>
						<br />
						<label className={"option " + selecionado[2]}>
							<input name="p2" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP2(0)+alteraSelecionado(["", "", "selecionado", ""])} />
							Motor de 1200cc
						</label>
						<br />
						<label className={"option " + selecionado[3]}>
							<input name="p2" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP2(0)+alteraSelecionado(["", "", "", "selecionado"])} />
							Carenagem esportiva
						</label>
					</div>
					<br />

					<button
						className="btn"
						onClick={() => {
                            alteraSelecionado(["", "", "", ""]);
							alteraVerP2(false);
							alteraVerP3(true);
						}}>
						Próximo
					</button>
				</div>
			)}

			{ver3 == true && (
				<div className="inicio">
					<p>3. Em que ano a Honda XRE 300 foi lançada no Brasil?</p>

					<img width="380px" src="https://www.motox.com.br/publix/imagens2009/999990063_001.jpg" />

					<div className="options">
						<label className={"option " + selecionado[0]}>
							<input name="p3" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP3(0)+alteraSelecionado(["selecionado", "", "", ""])} />
							2005
						</label>
						<br />
						<label className={"option " + selecionado[1]}>
							<input name="p3" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP3(0)+alteraSelecionado(["", "selecionado", "", ""])} />
							2008
						</label>
						<br />
						<label className={"option " + selecionado[2]}>
							<input name="p3" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP3(1)+alteraSelecionado(["", "", "selecionado", ""])} />
							2010
						</label>
						<br />
						<label className={"option " + selecionado[3]}>
							<input name="p3" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP3(0)+alteraSelecionado(["", "", "", "selecionado"])} />
							2012
						</label>
					</div>

					<br />

					<button
						className="btn"
						onClick={() => {
                            alteraSelecionado(["", "", "", ""]);
							alteraVerP3(false);
							alteraVerP4(true);
						}}>
						Próximo
					</button>
				</div>
			)}

			{ver4 == true && (
				<div className="inicio">
					<p>4. Qual a cilindrada da moto Kawasaki Ninja 300, que foi muito popular no Brasil?</p>

					<img width="365px" src="https://i.pinimg.com/originals/29/e1/fd/29e1fd5a1886c261f642f8867a7e40d9.jpg" />
					<div className="options">
						<label className={"option " + selecionado[0]}>
							<input name="p4" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP4(0)+alteraSelecionado(["selecionado", "", "", ""])} />
							150cc
						</label>
						<br />
						<label className={"option " + selecionado[1]}>
							<input name="p4" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP4(1)+alteraSelecionado(["", "selecionado", "", ""])} />
							300cc
						</label>
						<br />
						<label className={"option " + selecionado[2]}>
							<input name="p4" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP4(0)+alteraSelecionado(["", "", "selecionado", ""])} />
							500cc
						</label>
						<br />
						<label className={"option " + selecionado[3]}>
							<input name="p4" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP4(0)+alteraSelecionado(["", "", "", "selecionado"])} />
							650cc
						</label>
					</div>

					<br />

					<button
						className="btn"
						onClick={() => {
                            alteraSelecionado(["", "", "", ""]);
							alteraVerP4(false);
							alteraVerP5(true);
						}}>
						Próximo
					</button>
				</div>
			)}

			{ver5 == true && (
				<div className="inicio">
					<p>5. Qual modelo da Honda foi considerado um ícone das motos de baixa cilindrada no Brasil na década de 1980?</p>

					<img width="400px" src="https://www.honda.com.br/motos/sites/hda/files/2018-08/4_Uma-asa-de-peso.jpg" />

					<div className="options">
						<label className={"option " + selecionado[0]}>
							<input name="p5" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP5(0)+alteraSelecionado(["selecionado", "", "", ""])} />
							Honda CB 500
						</label>
						<br />
						<label className={"option " + selecionado[1]}>
							<input name="p5" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP5(0)+alteraSelecionado(["", "selecionado", "", ""])} />
							Honda XR 250
						</label>
						<br />
						<label className={"option " + selecionado[2]}>
							<input name="p5" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP5(1)+alteraSelecionado(["", "", "selecionado", ""])} />
							Honda CG 125
						</label>
						<br />
						<label className={"option " + selecionado[3]}>
							<input name="p5" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP5(0)+alteraSelecionado(["", "", "", "selecionado"])} />
							Honda Titan 150
						</label>
					</div>

					<br />

					<button
						className="btn"
						onClick={() => {
                            alteraSelecionado(["", "", "", ""]);
							alteraVerP5(false);
							alteraVerP6(true);
						}}>
						Próximo
					</button>
				</div>
			)}

			{ver6 == true && (
				<div className="inicio">
					<p>6. A qual marca pertence a moto esportiva conhecida como CBR 1000RR?</p>

					<img width="400px" src="https://riodejaneiro.pernambucomotos.com.br/k/imagens/11010354.jpg" />
					<div className="options">
						<label className={"option " + selecionado[0]}>
							<input name="p6" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP6(0)+alteraSelecionado(["selecionado", "", "", ""])} />
							Yamaha
						</label>
						<br />
						<label className={"option " + selecionado[1]}>
							<input name="p6" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP6(0)+alteraSelecionado(["", "selecionado", "", ""])} />
							Suzuki
						</label>
						<br />
						<label className={"option " + selecionado[2]}>
							<input name="p6" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP6(0)+alteraSelecionado(["", "", "selecionado", ""])} />
							Kawasaki
						</label>
						<br />
						<label className={"option " + selecionado[3]}>
							<input name="p6" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP6(1)+alteraSelecionado(["", "", "", "selecionado"])} />
							Honda
						</label>
					</div>

					<br />

					<button
						className="btn"
						onClick={() => {
                            alteraSelecionado(["", "", "", ""]);
							alteraVerP6(false);
							alteraVerP7(true);
						}}>
						Próximo
					</button>
				</div>
			)}

			{ver7 == true && (
				<div className="inicio">
					<p>7. Qual a principal característica da motocicleta Harley-Davidson Iron 883, que foi popular no Brasil?</p>

					<img width="400px" src="https://img0.icarros.com/dbimg/imgadicionalnoticia/4/84648_1.jpg" />
					<div className="options">
						<label className={"option " + selecionado[0]}>
							<input name="p7" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP7(1)+alteraSelecionado(["selecionado", "", "", ""])} />
							Motor V-twin de 883cc
						</label>
						<br />
						<label className={"option " + selecionado[1]}>
							<input name="p7" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP7(0)+alteraSelecionado(["", "selecionado", "", ""])} />
							Motor 4 cilindros em linha
						</label>
						<br />
						<label className={"option " + selecionado[2]}>
							<input name="p7" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP7(0)+alteraSelecionado(["", "", "selecionado", ""])} />
							Design esportivo
						</label>
						<br />
						<label className={"option " + selecionado[3]}>
							<input name="p7" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP7(0)+alteraSelecionado(["", "", "", "selecionado"])} />
							Pneus largos para off-road
						</label>
					</div>

					<br />

					<button
						className="btn"
						onClick={() => {
                            alteraSelecionado(["", "", "", ""]);
							alteraVerP7(false);
							alteraVerP8(true);
						}}>
						Próximo
					</button>
				</div>
			)}

			{ver8 == true && (
				<div className="inicio">
					<p>8. Qual era o apelido da Honda XLX 350R? </p>

					<img width="290px" src="https://img.olx.com.br/images/95/951454821295515.jpg" />
					<div className="options">
						<label className={"option " + selecionado[0]}>
							<input name="p8" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP8(1)+alteraSelecionado(["selecionado", "", "", ""])} />
							Xiselão
						</label>
						<br />
						<label className={"option " + selecionado[1]}>
							<input name="p8" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP8(0)+alteraSelecionado(["", "selecionado", "", ""])} />
							Xiselinha
						</label>
						<br />
						<label className={"option " + selecionado[2]}>
							<input name="p8" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP8(0)+alteraSelecionado(["", "", "selecionado", ""])} />
							Tucunaré
						</label>
						<br />
						<label className={"option " + selecionado[3]}>
							<input name="p8" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP8(0)+alteraSelecionado(["", "", "", "selecionado"])} />
							Van Gogh
						</label>
					</div>

					<br />

					<button
						className="btn"
						onClick={() => {
                            alteraSelecionado(["", "", "", ""]);
							alteraVerP8(false);
							alteraVerP9(true);
						}}>
						Próximo
					</button>
				</div>
			)}

			{ver9 == true && (
				<div className="inicio">
					<p>9. A Honda CRF 230F é uma moto voltada para qual tipo de uso?</p>

					<img width="380px" src="https://www.revistapro.com.br/uploads/images/2021/08/image_750x_61087d6a64d37.jpg" />
					<div className="options">
						<label className={"option " + selecionado[0]}>
							<input name="p9" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP9(1)+alteraSelecionado(["selecionado", "", "", ""])} />
							Enduro e off-road
						</label>
						<br />
						<label className={"option " + selecionado[1]}>
							<input name="p9" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP9(0)+alteraSelecionado(["", "selecionado", "", ""])} />
							Estrada e viagens longas
						</label>
						<br />
						<label className={"option " + selecionado[2]}>
							<input name="p9" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP9(0)+alteraSelecionado(["", "", "selecionado", ""])} />
							Circuitos de motocross
						</label>
						<br />
						<label className={"option " + selecionado[3]}>
							<input name="p9" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP9(0)+alteraSelecionado(["", "", "", "selecionado"])} />
							Uso urbano e street
						</label>
					</div>

					<br />

					<button
						className="btn"
						onClick={() => {
                            alteraSelecionado(["", "", "", ""]);
							alteraVerP9(false);
							alteraVerP10(true);
						}}>
						Próximo
					</button>
				</div>
			)}

			{ver10 == true && (
				<div className="inicio">
					<p>10. Qual modelo da Yamaha foi lançado no Brasil como uma versão de entrada para a linha de motos esportivas?</p>

					<img width="400px" src="https://www.mototrialibiuna.com.br/wp-content/uploads/2015/04/Yamaha-Motorcycles-Logo.png" />
					<div className="options">
						<label className={"option " + selecionado[0]}>
							<input name="p10" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP10(1)+alteraSelecionado(["selecionado", "", "", ""])} />
							Yamaha R3
						</label>
						<br />
						<label className={"option " + selecionado[1]}>
							<input name="p10" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP10(0)+alteraSelecionado(["", "selecionado", "", ""])} />
							Yamaha MT-07
						</label>
						<br />
						<label className={"option " + selecionado[2]}>
							<input name="p10" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP10(0)+alteraSelecionado(["", "", "selecionado", ""])} />
							Yamaha YZF-R1
						</label>
						<br />
						<label className={"option " + selecionado[3]}>
							<input name="p10" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP10(0)+alteraSelecionado(["", "", "", "selecionado"])} />
							Yamaha XTZ 250
						</label>
					</div>

					<br />

					<button
						className="btn"
						onClick={() => {
                            alteraSelecionado(["", "", "", ""]);
							alteraVerP10(false);
							alteraVerP11(true);
						}}>
						Próximo
					</button>
				</div>
			)}

			{ver11 == true && (
				<div className="inicio">
					<p>11. Qual foi a primeira moto japonesa a ser vendida no Brasil?</p>

					<img width="350px" src="https://logosmarcas.net/wp-content/uploads/2021/09/Marcas-de-motocicletas-Japonesas.png" />
					<div className="options">
						<label className={"option " + selecionado[0]}>
							<input name="p11" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP11(0)+alteraSelecionado(["selecionado", "", "", ""])} />
							Honda CB 750
						</label>
						<br />
						<label className={"option " + selecionado[1]}>
							<input name="p11" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP11(1)+alteraSelecionado(["", "selecionado", "", ""])} />
							Yamaha RD 350
						</label>
						<br />
						<label className={"option " + selecionado[2]}>
							<input name="p11" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP11(0)+alteraSelecionado(["", "", "selecionado", ""])} />
							Kawasaki Z1000
						</label>
						<br />
						<label className={"option " + selecionado[3]}>
							<input name="p11" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP11(0)+alteraSelecionado(["", "", "", "selecionado"])} />
							Suzuki Titan 125
						</label>
					</div>

					<br />

					<button
						className="btn"
						onClick={() => {
                            alteraSelecionado(["", "", "", ""]);
							alteraVerP11(false);
							alteraVerP12(true);
						}}>
						Próximo
					</button>
				</div>
			)}

			{ver12 == true && (
				<div className="inicio">
					<p>12. Qual foi o principal modelo de motocicleta da Kawasaki utilizado em competições de Superbike no Brasil?</p>
					<div className="options">
						<img className="p12" width="400px" src="https://www.autoracing.com.br/wp-content/uploads/2021/07/Superbike-Brasil-2021.jpg" />

						<label className={"option " + selecionado[0]}>
							<input name="p12" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP12(0)+alteraSelecionado(["selecionado", "", "", ""])} />
							Kawasaki Ninja 300
						</label>
						<br />
						<label className={"option " + selecionado[1]}>
							<input name="p12" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP12(0)+alteraSelecionado(["", "selecionado", "", ""])} />
							Kawasaki Z800
						</label>
						<br />
						<label className={"option " + selecionado[2]}>
							<input name="p12" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP12(1)+alteraSelecionado(["", "", "selecionado", ""])} />
							Kawasaki Ninja ZX-10R
						</label>
						<br />
						<label className={"option " + selecionado[3]}>
							<input name="p12" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP12(0)+alteraSelecionado(["", "", "", "selecionado"])} />
							Kawasaki Versys 650
						</label>
					</div>

					<br />

					<button
						className="btn"
						onClick={() => {
                            alteraSelecionado(["", "", "", ""]);
							alteraVerP12(false);
							alteraVerP13(true);
						}}>
						Próximo
					</button>
				</div>
			)}

			{ver13 == true && (
				<div className="inicio">
					<p>13. Qual a principal inovação da moto Ducati Monster 1200 que foi lançada no Brasil em 2014?</p>

					<img width="400px" src="https://www.motorede.com.br/wp-content/uploads/2017/07/ducati-monster-1200s-brasil-09-600x337.jpg" />
					<div className="options">
						<label className={"option " + selecionado[0]}>
							<input name="p13" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP13(0)+alteraSelecionado(["selecionado", "", "", ""])} />
							Motor com turbo
						</label>
						<br />
						<label className={"option " + selecionado[1]}>
							<input name="p13" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP13(0)+alteraSelecionado(["", "selecionado", "", ""])} />
							Sistema de suspensão adaptativo
						</label>
						<br />
						<label className={"option " + selecionado[2]}>
							<input name="p13" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP13(1)+alteraSelecionado(["", "", "selecionado", ""])} />
							Design naked e motor de 1198cc
						</label>
						<br />
						<label className={"option " + selecionado[3]}>
							<input name="p13" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP13(0)+alteraSelecionado(["", "", "", "selecionado"])} />
							Sistema de frenagem ABS
						</label>
					</div>

					<br />

					<button
						className="btn"
						onClick={() => {
                            alteraSelecionado(["", "", "", ""]);
							alteraVerP13(false);
							alteraVerP14(true);
						}}>
						Próximo
					</button>
				</div>
			)}

			{ver14 == true && (
				<div className="inicio">
					<p>14. Qual moto é famosa por ser a "moto da polícia" no Brasil?</p>

					<img
						width="350"
						src="https://storage.googleapis.com/images-homolog-moto.usadosbr.com/img/montadoras/galery/Road_King_Police_FLHPI+Road_King_Police_FLHPI+jpg1458309264-v1.jpg"
					/>
					<div className="options">
						<label className={"option " + selecionado[0]}>
							<input name="p14" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP14(0)+alteraSelecionado(["selecionado", "", "", ""])} />
							Yamaha XT 660
						</label>
						<br />
						<label className={"option " + selecionado[1]}>
							<input name="p14" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP14(0)+alteraSelecionado(["", "selecionado", "", ""])} />
							Honda CB 500X
						</label>
						<br />
						<label className={"option " + selecionado[2]}>
							<input name="p14" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP14(1)+alteraSelecionado(["", "", "selecionado", ""])} />
							Harley-Davidson Road King
						</label>
						<br />
						<label className={"option " + selecionado[3]}>
							<input name="p14" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP14(0)+alteraSelecionado(["", "", "", "selecionado"])} />
							BMW R 1200 RT
						</label>
					</div>

					<br />

					<button
						className="btn"
						onClick={() => {
                            alteraSelecionado(["", "", "", ""]);
							alteraVerP14(false);
							alteraVerP15(true);
						}}>
						Próximo
					</button>
				</div>
			)}

			{ver15 == true && (
				<div className="inicio">
					<p>15. Qual era o nome original da Bico de Pato? </p>

					<img width="400px" src="./img/bico_de_pato.jpg" />
					<div className="options">
						<label className={"option " + selecionado[0]}>
							<input name="p15" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP15(1)+alteraSelecionado(["selecionado", "", "", ""])} />
							Suzuki DR800
						</label>
						<br />
						<label className={"option " + selecionado[1]}>
							<input name="p15" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP15(0)+alteraSelecionado(["", "selecionado", "", ""])} />
							Yamaha Crosser{" "}
						</label>
						<br />
						<label className={"option " + selecionado[2]}>
							<input name="p15" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP15(0)+alteraSelecionado(["", "", "selecionado", ""])} />
							CBR 450 SR
						</label>
						<br />
						<label className={"option " + selecionado[3]}>
							<input name="p15" type="radio" className={"option " + selecionado[0]} onChange={() => alteraP15(0)+alteraSelecionado(["", "", "", "selecionado"])} />
							CB 250
						</label>
					</div>

					<br />

					<button
						className="btn"
						onClick={() => {
                            alteraSelecionado(["", "", "", ""]);
							alteraVerP15(false);
							alteraVerFinal(true);
						}}>
						Próximo
					</button>
				</div>
			)}

			{verFinal == true && (
				<div className="inicio">
					<h1>Resultado</h1>
					<p>Nota: {p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9 + p10 + p11 + p12 + p13 + p14 + p15}</p>

					{/* User name input field */}
					<div>
						<label>Insira seu nome: </label>
						<br />
						<input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Digite seu nome aqui" />
					</div>
					<br />
					{/* Button to finalize quiz */}
					<button className="btn" onClick={handleFinishQuiz}>
						Finalizar Quiz
					</button>

					{/* Display ranking as a table */}
					<h2>Ranking</h2>
					<table>
						<thead>
							<tr>
								<th>Posição</th>
								<th className="espacoNome">Nome</th>
								<th>Pontuação</th>
							</tr>
						</thead>
						<tbody>
							{ranking.map((user, index) => (
								<tr key={index}>
									<td>{index + 1}</td>
									<td className="espacoNome">{user.name}</td>
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
