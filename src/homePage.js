const data = [
  {
    title: 'About',
    stretch: 'column',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, temporibus delectus. Optio nisi non iure velit molestias alias eos eaque voluptatum! Sed, deserunt soluta veniam enim temporibus esse ducimus possimus?'
  },
  {
    title: 'Work Hours',
    type: 'time',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    hours: ['8am - 8pm', '6am - 6pm', '6am - 6pm', '6am - 6pm', '6am - 10pm', '6am - 10pm', '8am - 10pm']
  },
  {
    title: 'Location',
    text: 'Lorem ipsum dolor sit amet'
  }
]



function getPage() {

  const main = document.createElement('main');
  main.classList.add('content');

  const titleDiv = document.createElement('div');
  titleDiv.classList.add('title');
  const titleText = document.createElement('p');
  titleText.classList.add('title__text');
  titleText.textContent = 'Lorem ipsum dolor sit';
  titleDiv.appendChild(titleText);
  main.appendChild(titleDiv);

  for (let i = 0; i < data.length; i++) {
    const contentDiv = document.createElement('div');
    if (data[i].stretch === 'column') {
      contentDiv.classList.add('content__full-column');
    }
    contentDiv.classList.add('info');

    const contentHeader = document.createElement('h2');
    contentHeader.classList.add('info__title');
    contentHeader.textContent = data[i].title;
    contentDiv.appendChild(contentHeader);

    let innerContent;

    if (data[i].type === 'time') {

      innerContent = document.createElement('div');
      innerContent.classList.add('work-hours');

      const daysColumn = document.createElement('div');
      daysColumn.classList.add('work-hours__column');

      for (let j = 0; j < data[i].days.length; j++) {
        const day = document.createElement('p');
        day.classList.add('work-hours__item');
        day.textContent = data[i].days[j];
        daysColumn.appendChild(day);
      }

      const timeColumn = document.createElement('div');
      timeColumn.classList.add('work-hours__column');

      for (let j = 0; j < data[i].hours.length; j++) {
        const time = document.createElement('p');
        time.classList.add('work-hours__item');
        time.textContent = data[i].hours[j];
        timeColumn.appendChild(time);
      }

      innerContent.appendChild(daysColumn);
      innerContent.appendChild(timeColumn);

    } else {

      innerContent = document.createElement('p');
      innerContent.classList.add('info__text');
      innerContent.textContent = data[i].text;

    }

    contentDiv.appendChild(innerContent);

    main.appendChild(contentDiv);
  }





  return main;

  /*`
    
<main class="content">
  <div class="title">
    <p class="title__text">Lorem ipsum dolor sit</p>
  </div>
  <div class="content__full-column info">
    <h2 class="info__title">About</h2>
    <p class="info__text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
      temporibus delectus. Optio nisi non iure velit molestias alias eos eaque
      voluptatum! Sed, deserunt soluta veniam enim temporibus esse ducimus
      possimus?
    </p>
  </div>
  <div class="info">
    <h2 class="info__title">Work Hours</h2>
    <div class="work-hours">
      <div class="work-hours__column">
        <p class="work-hours__item">Monday</p>
        <p class="work-hours__item">Tuesday</p>
        <p class="work-hours__item">Wednesday</p>
        <p class="work-hours__item">Thursday</p>
        <p class="work-hours__item">Friday</p>
        <p class="work-hours__item">Saturday</p>
        <p class="work-hours__item">Sunday</p>
      </div>
      <div class="work-hours__column">
        <p class="work-hours__item">8am - 8pm</p>
        <p class="work-hours__item">6am - 6pm</p>
        <p class="work-hours__item">6am - 6pm</p>
        <p class="work-hours__item">6am - 6pm</p>
        <p class="work-hours__item">6am - 10pm</p>
        <p class="work-hours__item">6am - 10pm</p>
        <p class="work-hours__item">8am - 10pm</p>
      </div>
    </div>
  </div>
  <div class="info">
    <h2 class="info__title">Location</h2>
    <p class="info__text">Lorem ipsum dolor sit amet consectetur</p>
  </div>
</main>
    `; */
}

export default getPage;