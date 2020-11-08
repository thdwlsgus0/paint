(()=>{
  const canvas = document.querySelector('.canvas');
  const context = canvas.getContext('2d');
  const control = document.querySelector('.control');
  const saveBtn = document.querySelector('.save-btn');
  const allCloseBtn = document.querySelector('.all-close-btn');
  const colorType = ["black", "red", "green", "blue","yellow"];
  let drawingMode;
  let colorVal ='black';
  const downHandler = () =>{
      drawingMode = true;
  }
  const upHandler = () =>{
      drawingMode = false;
  }
  const moveHandler = (e) =>{
      if(!drawingMode)return;
        const fillSize = document.querySelector('#jsRange').value;
        context.beginPath();
        context.arc(e.layerX,e.layerY,fillSize,0,Math.PI*2, false);
        context.fill();
  
  }
  const setColor = (e) =>{
     colorVal = e.target.getAttribute('data-color');
     context.fillStyle = colorVal;
     initColor();
     if(!e.target.classList.contains("erase-btn")){
        e.target.setAttribute('data-color',"purple");
     }
  }
  const initColor = () =>{
      const colorButtonAll = document.querySelectorAll('.color-btn');
      colorButtonAll.forEach((value, index)=>{
           value.setAttribute('data-color', colorType[index]);
      });
  }

  const resetCanvas = () =>{
      context.clearRect(0,0,500,300);
  }
  const createImage = (e1) =>{
      const url = canvas.toDataURL('image/png');
      const imgElem = new Image();
      imgElem.src = url;
      const aTag = document.createElement('a');
      aTag.download = '그림판 저장.png';
      aTag.href = url;
      aTag.click();
  }
  canvas.addEventListener('mouseup', upHandler);
  canvas.addEventListener('mousemove', moveHandler);
  canvas.addEventListener('mousedown', downHandler);
  control.addEventListener('click', setColor);
  saveBtn.addEventListener('click', createImage);
  allCloseBtn.addEventListener('click', resetCanvas);
})();