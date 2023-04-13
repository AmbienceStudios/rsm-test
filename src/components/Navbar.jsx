import React from 'react'

const Navbar = () => {
  return (
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">RSM Test Project</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto text-right">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/scene1.html">Scene 1
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/scene2.html">Scene 2</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Navbar