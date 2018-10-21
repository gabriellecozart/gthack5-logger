let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

var dimension = [document.documentElement.clientWidth, document.documentElement.clientHeight];
canvas.width = dimension[0];
canvas.height = dimension[1];
    
/* Recursive helper function */
function draw() {
	// Clear the canvas
	ctx.clearRect(0,0,canvas.width,canvas.height);
	
	// Move to the bottom middle of the canvas, which is where we're going to start
	ctx.translate(canvas.width/2,canvas.height);
	// Call our recusive drawing function
	drawTree(ctx, 0);
}

/* Draw tree recursively */
function drawTree(ctx, level)
{
    if (level == 6) return; // base case
    
    if (level == 0)
        var branches = 1;
    else
        var branches = level + 1;

    /* Create branches for this level */
    for (var branchCount = 0; branchCount < branches; branchCount++)
    {
        console.log(branches);
        ctx.save();

        var degrees = 45 * (branches - 1); // Degrees between the branches!

        ctx.rotate( -degrees / 2 * ( Math.PI / 180 ) ); // Rotate to draw the branches growing outward!

        ctx.lineWidth = 3 * (6 - level); // Thickness of the line should shrink (i.e. root, branch, twig)!

        ctx.strokeStyle = 'rgb(0,0,0)'; // The tree should be a black sillhouette

        // Draw the line!
        ctx.beginPath();
        ctx.lineTo(0,0);
        ctx.lineTo(0,-75);
        ctx.stroke();

        ctx.translate(0,-71); // Translate to the new point!
        ctx.scale(0.85,0.85); // Scale all of the following elements!
        drawTree(ctx, level + 1); // Recur!

        ctx.restore();
        ctx.rotate(45 * (Math.PI / 180 ));
    }
}

draw();