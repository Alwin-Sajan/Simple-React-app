import React from 'react';
import { Login } from './Login_Page';
function Header(){
    return (<ul className="header">
    <li id="active">
      <a href="#">Home</a>
    </li>
    <li>
      <a href="#">Campus</a>
    </li>
    <li>
      <a href="#">About</a>
    </li>
    <li>
      <a href="#">Event</a>
    </li>
    <li>
      <a href="#">Login</a>
    </li>
  </ul>);
}

function Footer(){
    return (<ul className='footer'>
                <li className="Project">
                    <h5>Team: Reverse</h5>
                    <p>Project name: Lunar</p>
                </li>
            </ul>
      );
}

export{Header,Footer};