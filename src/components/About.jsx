
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";




const About = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={showModal}>Lyrics</button>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Navy </Modal.Title>
        </Modal.Header>
        <Modal.Body>   Flame to your temple like a holy prayer 
Scored with your chick 
Like no goalie there 

Top of the mountain 
It was lonely here 

Only if I’m not playin 
Is it only fair 

All they do is wine 
they’re sommelier 
I know your shit don’t stink 
I’ll still go for air

Coup all white like a polar bear 
They know I’m rare 


First row is scared 
No one’s spared 

Costra nostra airs 
  Coast to coast 
I tear 
tell ‘em grow a pair 


the kid taking taking care


I’m just different I dare 
Get Fuck outta hair
Like a bucket of nair 


that you just can’t compare 
get surrounded  ensnared 


Elevate to success 
bitch take the stairs 

They breaking down on thei winding road 
 they’re putting up flairs 

I’m irreverent 
The revenant 
Look out for the bear 

All they could muster or scare 
Was a sucker affair 
sweet 
as 
an eclair  
He hasn’t a care 
He spazzed in there   
She’s casually aware   



………..
Trident in hand 
When. I take my lady out

Flight to Japan 
Flow like it’s 80 out
 
They tried to play me 
But it never came about 

no one on my wave 
I went the navy route 



 

  

A kind of mechanic  
 Inimical manic 

Bring em 
A whole new dynamic 

Gotham In hand 

But don’t live in the planet 

Trees hold me up like a hammock 

 hold all the cards like I’m gambit 

Fame 
When I come and I drum up a panic 

 
Green in my lungs all organic 

When I connect it’s a panic
May as well  

mic check on the deck of the titanic 
…. 

 

Cannonic echelon 
Got our weapons on
Exotic restaurants 
Teutonic hegemon 
Darling debutantes 
Spot us medals donned 
gold on me 
like I robbed a leprechaun 


…..

Thought they could play me 
But it never came about 
they’re not on my wave I went the navy route 
…………..


 

……

Automatics and four wheelers 
 It’s just like we’re  isis 

calling my flow Santa cuz it’s the nicest 

don’t gamble with them 
Look how loaded their dice is 
 
Wanna know what my vice 
Is 
To become a crisis 

Love how moonlight reflect of my knife edge 


Words are like acid 
They trip off 
what I said 

Never been passive 
My passion to dissect 

Can’t keep up with my tech 
It’s just like I’m psychic 

They’re ain’t nothing like it 

They needed a spy kit 

Chronic to my head

I’m No longer biped

I don’t care 

  They’re all squares
Like a rice bed

I’m Thorn on their sides 
They’re  christs head 

I mean I’m a fiend 
I’m a pipe head

Had a dream I was light 
But was I dead 
green lit but
The beam of sights red  

Seems obscene like a vice den 

 Only treated to a small stipend  

That’s why we get high as kite been 

Flow like they’re burying a Viking 

They all spoke in circle 
they’re biking 


Nice with the hands 
Plus the drip like it’s raining out 

They’re not on my way wave I went the navy route 



 
 


 


- [ ] 
</Modal.Body>
        <Modal.Footer>
          <button onClick={hideModal}>close</button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default About;