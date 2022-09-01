import React, { useContext, useEffect, useState } from "react";
import { Header } from "./Header";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { GlobalContext } from "../contexts/GlobalContext";

export const Ranking = () => {

  const [sudoku, setSudoku] = useState();

  const { getRanking } = useContext(GlobalContext);

  const promise = async () => {
    const res = await fetch("https://no-country-app.herokuapp.com/ranking/sudoku");
    const data = await res.json();
    setSudoku(await data);
  }

  console.log(sudoku)
  useEffect(()=>{
    promise();
  }, [])

  return (
    <div>
      <Header />
      <NavBar />


      <div className="rankingContainer">
        <div className="rankingContainer-global">
          <h2>Ranking global</h2>
          <table>
            <tbody>
              <tr className="rankingContainer-title">
                <th>#</th>
                <th>Nombre</th>
                <th>Pts.</th>
              </tr>
              <tr id="payer1">
                <td>1</td>
                <td></td>
                <td>1200</td>
              </tr>
              <tr id="player2">
                <td>2</td>
                <td>asdaqw</td>
                <td>1200</td>
              </tr>
              <tr id="player3">
                <td>3</td>
                <td>Doeqwe</td>
                <td>1200</td>
              </tr>
              <tr id="player4">
                <td>4</td>
                <td>fghfgh</td>
                <td>1200</td>
              </tr>
              <tr id="player5">
                <td>5</td>
                <td>zxczcas</td>
                <td>1200</td>
              </tr>
              <tr id="player6">
              <td>6</td>
              <td>ertert</td>
              <td>1200</td>
            </tr>
            <tr id="player7">
              <td>7</td>
              <td>fgyhrty</td>
              <td>1200</td>
            </tr>
            <tr id="player8">
              <td>8</td>
              <td>asdqweqzz</td>
              <td>1200</td>
            </tr>
            <tr id="player9">
              <td>9</td>
              <td>xcghqaetq</td>
              <td>1200</td>
            </tr>
            <tr id="player10">
              <td>10</td>
              <td>fgjgfjs</td>
              <td>1200</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div className="rankingContainer-games">
          <div className="rankingContainer-wordle">
            <h2>Wordle</h2>
            <table>
              <tbody>
                <tr className="rankingContainer-title">
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Pts.</th>
                </tr>
                <tr id="payer1">
                  <td>1</td>
                  <td>GameLander</td>
                  <td>1200</td>
                </tr>
                <tr id="player2">
                  <td>2</td>
                  <td>asdaqw</td>
                  <td>1200</td>
                </tr>
                <tr id="player3">
                  <td>3</td>
                  <td>Doeqwe</td>
                  <td>1200</td>
                </tr>
                <tr id="player4">
                  <td>4</td>
                  <td>fghfgh</td>
                  <td>1200</td>
                </tr>
                <tr id="player5">
                  <td>5</td>
                  <td>zxczcas</td>
                  <td>1200</td>
                </tr>
                <tr id="player6">
                <td>6</td>
                <td>ertert</td>
                <td>1200</td>
              </tr>
              <tr id="player7">
                <td>7</td>
                <td>fgyhrty</td>
                <td>1200</td>
              </tr>
              <tr id="player8">
                <td>8</td>
                <td>asdqweqzz</td>
                <td>1200</td>
              </tr>
              <tr id="player9">
                <td>9</td>
                <td>xcghqaetq</td>
                <td>1200</td>
              </tr>
              <tr id="player10">
                <td>10</td>
                <td>fgjgfjs</td>
                <td>1200</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="rankingContainer-sudoku">
            <h2>Sudoku</h2>
            <table>
              <tbody>
              <tr className="rankingContainer-title">
                <th>#</th>
                <th>Nombre</th>
                <th>Pts.</th>
              </tr>
              <tr id="payer1">
                <td>1</td>
                <td></td>
                <td></td>
              </tr>
              <tr id="player2">
                <td>2</td>
                <td>asdaqw</td>
                <td>1200</td>
              </tr>
              <tr id="player3">
                <td>3</td>
                <td>Doeqwe</td>
                <td>1200</td>
              </tr>
              <tr id="player4">
                <td>4</td>
                <td>fghfgh</td>
                <td>1200</td>
              </tr>
              <tr id="player5">
                <td>5</td>
                <td>zxczcas</td>
                <td>1200</td>
              </tr>
              <tr id="player6">
                <td>6</td>
                <td>ertert</td>
                <td>1200</td>
              </tr>
              <tr id="player7">
                <td>7</td>
                <td>fgyhrty</td>
                <td>1200</td>
              </tr>
              <tr id="player8">
                <td>8</td>
                <td>asdqweqzz</td>
                <td>1200</td>
              </tr>
              <tr id="player9">
                <td>9</td>
                <td>xcghqaetq</td>
                <td>1200</td>
              </tr>
              <tr id="player10">
                <td>10</td>
                <td>fgjgfjs</td>
                <td>1200</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="rankingContainer-memory">
            <h2>Memory</h2>
            <table>
              <tbody>
              <tr className="rankingContainer-title">
                <th>#</th>
                <th>Nombre</th>
                <th>Pts.</th>
              </tr>
              <tr id="payer1">
                <td>1</td>
                <td>GameLander</td>
                <td>1200</td>
              </tr>
              <tr id="player2">
                <td>2</td>
                <td>asdaqw</td>
                <td>1200</td>
              </tr>
              <tr id="player3">
                <td>3</td>
                <td>Doeqwe</td>
                <td>1200</td>
              </tr>
              <tr id="player4">
                <td>4</td>
                <td>fghfgh</td>
                <td>1200</td>
              </tr>
              <tr id="player5">
                <td>5</td>
                <td>zxczcas</td>
                <td>1200</td>
              </tr>
              <tr id="player6">
              <td>6</td>
              <td>ertert</td>
              <td>1200</td>
            </tr>
            <tr id="player7">
              <td>7</td>
              <td>fgyhrty</td>
              <td>1200</td>
            </tr>
            <tr id="player8">
              <td>8</td>
              <td>asdqweqzz</td>
              <td>1200</td>
            </tr>
            <tr id="player9">
              <td>9</td>
              <td>xcghqaetq</td>
              <td>1200</td>
            </tr>
            <tr id="player10">
              <td>10</td>
              <td>fgjgfjs</td>
              <td>1200</td>
            </tr>
            </tbody>
            </table>
          </div>
          <div className="rankingContainer-buscaMinas">
            <h2>Busca Minas</h2>
            <table>
              <tbody>
              <tr className="rankingContainer-title">
                <th>#</th>
                <th>Nombre</th>
                <th>Pts.</th>
              </tr>
              <tr id="payer1">
                <td>1</td>
                <td>GameLander</td>
                <td>1200</td>
              </tr>
              <tr id="player2">
                <td>2</td>
                <td>asdaqw</td>
                <td>1200</td>
              </tr>
              <tr id="player3">
                <td>3</td>
                <td>Doeqwe</td>
                <td>1200</td>
              </tr>
              <tr id="player4">
                <td>4</td>
                <td>fghfgh</td>
                <td>1200</td>
              </tr>
              <tr id="player5">
                <td>5</td>
                <td>zxczcas</td>
                <td>1200</td>
              </tr>
              <tr id="player6">
              <td>6</td>
              <td>ertert</td>
              <td>1200</td>
            </tr>
            <tr id="player7">
              <td>7</td>
              <td>fgyhrty</td>
              <td>1200</td>
            </tr>
            <tr id="player8">
              <td>8</td>
              <td>asdqweqzz</td>
              <td>1200</td>
            </tr>
            <tr id="player9">
              <td>9</td>
              <td>xcghqaetq</td>
              <td>1200</td>
            </tr>
            <tr id="player10">
              <td>10</td>
              <td>fgjgfjs</td>
              <td>1200</td>
            </tr>
            </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
