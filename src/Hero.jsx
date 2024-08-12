import Button from "./Button";
const Hero = () => {
  return (
    
    
    
    
    
    <div className="flex flex-col items-center">
<img src="src/AI-Portrait.webp" alt="" class="flex flex-col items-center rounded-full "></img>

<div className="flex gap-4  ">

     <Button title ="Contact Me" type="orange" icon="contact "  className="flex flex-col items-center"/>
     <Button title="moreinfo" type="pink" icon="more info"/>
<Button title="help" type="pink" icon="help"/>
</div>
<div>
<form>
  <label class="block">
    <span class="block text-sm font-medium text-black">Suggestion</span>
    <input type="email" class="peer ..."/>
    <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid sugestion.
    </p>
  </label>
</form>
</div>

</div>
       
);
};

export default Hero;