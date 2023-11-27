let form = document.getElementById("triangleForm");

    form.addEventListener("input", function() {
        calculateTriangleArea();
    });

    function calculateTriangleArea() {
        let base = parseFloat(document.getElementById("base").value) || 0;
        let height = parseFloat(document.getElementById("height").value) || 0;

        // Calculate the area of the triangle
        let area = (base * height) / 2;

        document.getElementById("areaResult").innerHTML = "Area of Triangle: " + area.toFixed(2);
    }