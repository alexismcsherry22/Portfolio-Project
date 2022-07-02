function skillTextSwitch(id) 
{
  const header = document.getElementById("skillHeader");
  const description = document.getElementById("skillDesc");
  const example = document.getElementById("skillExample");

  if (id == "skillOne")
  {
    header.innerHTML = "Skill One";
    description.innerHTML = "Skill One Description.";
    example.innerHTML = "Skill One Example.";
  }
  else if (id == "skillTwo")
  {
    header.innerHTML = "Skill Two";
    description.innerHTML = "Skill Two Description.";
    example.innerHTML = "Skill Two Example.";
  }
  else if (id == "skillThree")
  {
    header.innerHTML = "Skill Three";
    description.innerHTML = "Skill Three Description.";
    example.innerHTML = "Skill Three Example.";
  }
  else //no id found
  {
    header.innerHTML = "Skill Doesn't Exist";
    description.innerHTML = "Nothing to see here.";
    example.innerHTML = "Nothing to see here.";
  }
}

function goToDescription()
{
  window.location.href ="SkillsPage.html#skillDesc";
}