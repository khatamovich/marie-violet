// Images
import purpleFlameCover from "../assets/images/books/portae.jpg";
import purpleFlameCoverEn from "../assets/images/books/portae-en.jpg";
import aftertaste from "../assets/images/books/aftertaste.jpg";
import aftertasteEn from "../assets/images/books/aftertaste-en.jpg";
import Boginka from "../assets/images/books/boginka.png";

const en = [
	{
		id: 1,
		name: "Purple flame",
		annotation: `'Enchantresses are dangerous, ruthless, and bloodthirsty; they cannot be trusted; they cannot be controlled. All that remains for people is to expel the sorceresses from the free lands of the kingdom of Rodarhan!'
 				
			This is what will be written on the order pamphlets with the royal seal, when the Punishers will ruin innocent lives.

			But little Arabela is not yet familiar with either cruelty or betrayal. She believes in love and mother’s fairy tales; she sees prophetic dreams. The road lies before her; other people’s destinies fall into her hands; she is led by the ghosts of the past.

			She doesn’t recognise the melody yet, but one day she will certainly – definitely – sing this lullaby to the little heir of the big kingdom of strife.`,
		coverImage: purpleFlameCoverEn,
		previewURL:
			"https://docs.google.com/document/d/1zjuRDAd-iyUhnKjZnAUe0l55EKmvrcZf9bomERksqb8/edit?hl=ru",
	},
	{
		id: 2,
		name: "Cherry aftertaste",
		annotation: `Faith in a fairy tale and a loving heart led young Juliet Lotten to the county of Yorkshire, in the north of England. However, life did not leave Julia without surprises: in her new house, each member of the household has their own secrets.

			Those intrigues are buried under seven seals and dusted with decaying time.
			Everyone here is used to obeying strict rules and living according to traditions that they must put up with. But charming Eric Melton storms into a series of family affairs, challenges the established order and gives young Julia a taste of real life.

			What do the sealed envelopes and empty rooms of the family estate hide?
			Where do the mistakes of silence lead?

			And what choice does Julia have to make to understand what it means to be truly happy?`,
		coverImage: aftertasteEn,
		previewURL:
			"https://docs.google.com/document/d/1ovoKPyhgrBFXr9Hd9MJHt-6ZBV-9As9KbtveZ7Gys0I/edit?usp=sharing",
	},
	{
		id: 3,
		name: "The play",
		annotation: `Iseult Benton never had any home, any family, or any faith.
			Her past is full of ambiguity, and her future is empty. And only her lively, brave heart continues to beat in her chest when he looks at her from afar; when he touches her skin; when he whispers in her ear the words dedicated to her alone.
			To her alone. 

			She closes her eyes, inhales deeply her favourite scent of cinnamon and sweet oranges, and exhales. In front of her there is a frightening nothingness, shrouded in the darkness of a small, cold chamber.

			Did she abandon this God or never belong to him?`,
		coverImage:
			"https://www.marytribble.com/wp-content/uploads/2020/12/book-cover-placeholder.png",
	},
	{
		id: 4,
		name: "Boginka",
		annotation: `It was like that: amidst the whispers of the folks, there lingered a tale of the hideous Boginka who dwelled within the murky swamps. With gnarled hands and fingers like twisted roots, she ensnared unwary travellers, drawing them into her watery realm. Those who dared to meet her gaze found themselves rendered speechless by the abyss of her black eyes. A shadow of dread fell upon the village where she settled, for none could escape the clutches of her malevolent spirits.

			Yet amidst the darkness, one soul remained untouched by sorrow or fear – for it was Malada, who treaded fearlessly through the forest paths and by the mischievous swamps. ‘Beware the Wandering Lights, dear child,’ the folks cautioned, ‘Avert, avert your gaze from the white sheets that the treacherous spirit washes in the river!’
			
			Will fortune favour Malada this time, will it mend the scars of the past, or will the wounds remain unhealed?
			`,
		coverImage: Boginka,
	},
];

const ru = [
	{
		id: 1,
		name: "Пурпурное пламя",
		annotation: `«Чаровницы опасны, безжалостны и кровожадны; им нельзя доверять; их невозможно контролировать. Все, что остается людям, – изжить колдуний из свободных земель королевства Родаран».

Это то, что напишут на приказных памфлетах с королевской печатью, когда Каратели будут рушить невинные жизни.
Но маленькой Арабеле пока не знакомы ни жестокость, ни предательство. Она верит в любовь и материнские сказки; она видит вещие сны. Перед ней ложится дорога; в ее руки попадают чужие судьбы; она ведома призраками прошлых лет.

Она пока еще не узнает напев, но однажды точно – непременно – она сама споет эту колыбельную маленькому наследнику большого королевства раздора.`,
		coverImage: purpleFlameCover,
		previewURL:
			"https://www.google.co.uz/books/edition/Пурпурное_Пламя/B3qsEAAAQBAJ?hl=ru&gbpv=1&printsec=frontcover",
	},
	{
		id: 2,
		name: "Вишневое послевкусие",
		annotation: `Вера в сказку и влюбленное сердце привели юную Джульетту Лоттен вслед за женихом в графство Йоркшир, на север Англии.
Однако жизнь не оставила Джулию без сюрпризов: в новом доме у каждого домочадца свои секреты и интриги.
Они похоронены под семью печатями и припорошены истлевшим временем.

Здесь каждый привык подчиняться строгим правилам и жить согласно традициям, с которыми приходится мириться через силу.
Но обаятельный Эрик Мэлтон вихрем врывается в череду фамильных интриг, бросает вызов установленным порядкам и дает юной Джулии попробовать настоящую жизнь на вкус.
Что же скрывают в себе запечатанные конверты и опустевшие комнаты родового имения?
Куда приводят ошибки молчания?

И какой выбор предстоит сделать Джулии, чтобы понять, что значит быть счастливой по-настоящему?`,
		coverImage: aftertaste,
		previewURL:
			"https://www.google.co.uz/books/edition/Вишневое_Послевкусие/Zu1sEAAAQBAJ?hl=ru&gbpv=1",
	},
	{
		id: 3,
		name: "Пьеса",
		annotation: `У Изольды Бентон никогда не было ни дома, ни семьи, ни веры. Ее прошлое полнится недосказанностью, а будущее – пустотой.

И только ее бойкое храброе сердце продолжает биться в груди, когда он смотрит на нее издалека; когда он касается ее кожи; когда он шепчет ей на ухо строки, посвященные лишь ей, лишь ей одной.
Она закрывает глаза, глубоко втягивает любимый аромат корицы и сладких апельсинов и выдыхает. Перед ней – пугающее ничего, окутанное мраком маленькой холодной кельи.
 
Она отказалась от этого бога или никогда ему не принадлежала?`,
		coverImage:
			"https://www.marytribble.com/wp-content/uploads/2020/12/book-cover-placeholder.png",
	},
	{
		id: 4,
		name: "Богинка",
		annotation: `Есть поверье среди народа о Богинке безобразной, что в болотах прячется да путников несчастных в топи заманивает. Руки ее кривые с пальцами цепкими душат и мучают; в очи черные ее заглянешь – дара речи лишишься.

Жуткое лихо она для деревни, близ которой поселится, и не сыщется храбреца, что живым после встречи с силой нечистой останется.

Только Млада с детских лет не знает ни скорби, ни страха. Смело гуляет по тропам лесным да вблизи болот проказливых.
Не ходи ты, Младушка, вслед за огнями блуждающими, не смотри на простыни белые, что в реке Богинка коварная полощет!

Обойдет ли беда стороной тебя хоть на этот раз, али раны прошлого так и останутся незатянутыми?
			`,
		coverImage: Boginka,
		previewURL:
			"https://www.google.co.uz/books/edition/Богинка/NFFHEAAAQBAJ?hl=ru&gbpv=1",
	},
];

export default {
	en,
	ru,
};
