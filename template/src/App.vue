<template>
  <div id="app">
    {{#router}}
    <router-view/>
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}

{{/unless}}
export default {
  name: 'app'
}
</script>

<style>
  html, body {
    height: 100%;
  }

  body {
    font-size: 12px;
    color: #fff;
  }

  body, div, p, a, ul, li {
    margin: 0;
    padding: 0;
  }

  em {
    font-style: normal;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  a:hover {
    text-decoration: none;
  }

  img {
    border: 0;
    vertical-align: middle;
  }

  li {
    list-style: none;
  }

  label {
    display: inline-block;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  form {
    display: inline-block;
    width: 100%;
  }

  input {
    vertical-align: middle;
    outline: 0;
  }

  textarea {
    resize: none;
    line-height: 20px;
    overflow-y: auto;
  }

  button {
    border: none;
    background: none;
    text-align: center;
  }

  :focus {
    outline: 0;
  }

  ::-webkit-scrollbar
  {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: rgb(16, 78, 139);
  }
</style>
