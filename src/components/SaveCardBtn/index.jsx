import React from 'react';

export default function SaveCardBtn() {

    const handleSave = async () => {

        const textHTML = textRef.current.innerHTML;

        console.log(textHTML)

    const newData = {
        title: titleRef.current.innerHTML,
        text: textRef.current.innerHTML,
        "styling": {
            "top": "30px",
          }
    };

    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
    }

    const response = await fetch(`http://backend/${cardType}`, options);
    const data = await response.json();

    if (response.status == 201) {
        e.target.reset();
        alert(`You're ${cardType} has been saved to ${category}!`)
        console.log('Data saved successfully:', data);
    } else {
        alert(data.error);
    }
    };

  return (
        <button onClick={handleSave}>Save</button>
  )
}