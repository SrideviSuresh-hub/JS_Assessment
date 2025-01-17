const container = document.getElementById('container');
        const minSize = 50;
        let size = 200;
        const sizeReduction = 10;

        document.getElementById('circle').addEventListener('click', () => appendShapes('circle'));
        document.getElementById('square').addEventListener('click', () => appendShapes('square'));
        document.getElementById('triangle').addEventListener('click', () => appendShapes('triangle'));


            // console.log(shape.getBoundingClientRect())
        function appendShapes(className) {
            const count = parseInt(document.getElementById('shapeCount').value);
            if (isNaN(count))
                { return;
                }

            let shapesAdded = 0;
            while (shapesAdded < count) {
                const shape = document.createElement('div');
                shape.className = className;

                if (className === 'triangle') {
                    shape.style.borderLeft = `${size / 2}px solid transparent`;
                    shape.style.borderRight = `${size / 2}px solid transparent`;
                    shape.style.borderBottom = `${size}px solid rgb(20, 50, 198)`;
                }
                 else {
                    shape.style.width = `${size}px`;
                    shape.style.height = `${size}px`;
                }

                if (hasEnoughSpace(shape)) {
                    container.appendChild(shape);
                    shapesAdded++;
                } 
                else {
                    size -= sizeReduction;
                     if (size < minSize) {
                    size = minSize;
                        break;
                }
                    resizeShapes();
                }
            }

            // if (shapesAdded < count) {
            //     alert('No enough space for all shapes!');
            // }

            if (shapesAdded > 0) {
                document.getElementById('shapeCount').value = '';
            }
        }
        
        
        function hasEnoughSpace(shape) {
           
            container.appendChild(shape);
            const rect = shape.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            const hasAvailSpace = rect.bottom <= containerRect.bottom && rect.right <= containerRect.right;
            container.removeChild(shape);
            return hasAvailSpace;
        }

        
        function resizeShapes() {
            
            const shapes = document.querySelectorAll('.circle, .square, .triangle');
            shapes.forEach(shape => {
                if (shape.className === 'triangle') {
                    shape.style.borderLeft = `${size / 2}px solid transparent`;
                    shape.style.borderRight = `${size / 2}px solid transparent`;
                    shape.style.borderBottom = `${size}px solid rgb(20, 50, 198)`;
                } else {
                    shape.style.width = `${size}px`;
                    shape.style.height = `${size}px`;
                }
            });
        }