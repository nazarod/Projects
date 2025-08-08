const Activo = document.getElementById("Activo");
const Inactivo = document.getElementById("Inactivo");

Activo.addEventListener("click", function()
{
    document.getElementById("BtnActivo").checked = true;
    Activo.style.backgroundColor = "#3FACB9";
    Inactivo.style.backgroundColor = "";
});

Inactivo.addEventListener("click", function()
{
    document.getElementById("BtnInactivo").checked = true;
    Inactivo.style.backgroundColor = "#3FACB9";
    Activo.style.backgroundColor = "";
});

if (document.getElementById("BtnActivo").checked)
{
    Activo.style.backgroundColor = "#3FACB9";
}
else if (document.getElementById("BtnInactivo").checked)
{
    Inactivo.style.backgroundColor = "#3FACB9";
}

$(document).ready(function()
{
    $("#ListaEmpresa").hide();

    $("#Cuadricula").click(function()
    {
        $("#CardEmpresa").show();
        $("#ListaEmpresa").hide();
    });

    $("#Lista").click(function()
    {
        $("#CardEmpresa").hide();
        $("#ListaEmpresa").show();
    });
});
