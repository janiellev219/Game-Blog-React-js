import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
     <header>

      

<div className="logo">
Welcome to the Gamer Blog
</div>


<nav>
<ul>
<li>
  <a href="http://localhost:3000/">Home</a>
</li>
<li>
  <a href="https://www.callofduty.com/blackops4">BO4</a>
</li>
<li>
  <a href="https://binged.it/2KuJTHv">HALO 5</a>
</li>

</ul>


</nav>
         
     </header>
    );
  }
}

export default Header;
