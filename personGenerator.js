const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }   
    }`,
    firsNameFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Елена",
            "id_2": "Виктория",
            "id_3": "Екатерина",
            "id_4": "Яна",
            "id_5": "Снежана",
            "id_6": "Кристина",
            "id_7": "Полина",
            "id_8": "Клавдия",
            "id_9": "Валентина",
            "id_10": "София"
        }
    }`,
 
    patronymicJson: `{
        "count": 10,
        "list": {
            "id_1": "Ивано",
            "id_2": "Степано",
            "id_3": "Викторо",
            "id_4": "Владимиро",
            "id_5": "Евгенье",
            "id_6": "Сергее",
            "id_7": "Семено",
            "id_8": "Павло",
            "id_9": "Тимуро",
            "id_10": "Олего"
        }
    }`,

    professionMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Водитель",
            "id_2": "Врач",
            "id_3": "Шахтер",
            "id_4": "Бухгалтер",
            "id_5": "Менеджер",
            "id_6": "Каскадер",
            "id_7": "Кладовщик",
            "id_8": "Грузчик",
            "id_9": "Продавец",
            "id_10": "Пилот"   
        }
    }`,

    professionFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Водитель",
            "id_2": "Врач",
            "id_3": "Актриса",
            "id_4": "Бухгалтер",
            "id_5": "Менеджер",
            "id_6": "Каскадер",
            "id_7": "Повар",
            "id_8": "Ученая",
            "id_9": "Продавец",
            "id_10": "Пилот"
        }
    }`,

    monthJson: `{
        "count": 12,
        "list": {
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"
        }
    }`,


   

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',
    
    randomGender: function (){

        return Math.floor(Math.random()*2) == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomYearBirth: function (min=1950, max=2023){
               
        return (Math.floor(Math.random() * ((max - min) + 1) + min)) + " Года рождения";
    },

    randomDay: function (min=1, max=31){
        if (this.randomMonth == "Апреля" || "Июня" || "Сентября" || "Ноября"){
            max=30;

            return Math.floor(Math.random() * ((max - min) + 1) + min);
        } else if (this.randomMonth = "Февраля"){
            max=28;
            return Math.floor(Math.random() * ((max - min) + 1) + min);
        }
        else
        
        return Math.floor(Math.random() * ((max - min) + 1) + min);

    },

    randomMonth: function (){
        
        return this.randomValue(this.monthJson);
    },

    

    randomFirstName: function() {
        if (this.person.gender == this.GENDER_MALE )

        return this.randomValue(this.firstNameMaleJson);
        else 
        return this.randomValue(this.firsNameFemaleJson);

    },


     randomSurname: function() {
        if (this.person.gender == this.GENDER_MALE)

        return this.randomValue(this.surnameJson);
       
        else 
        
        return this.randomValue(this.surnameJson)+`a`;

    },

    randomPatronymic: function() {
        if (this.person.gender == this.GENDER_MALE)

        return this.randomValue(this.patronymicJson)+`вич`;
       
        else 
        
        return this.randomValue(this.patronymicJson)+`внa`;

    },

    randomProfession: function() {
        if ( this.person.gender == this.GENDER_MALE)
       

        return this.randomValue(this.professionMaleJson);
       
        else 
       
        
        return this.randomValue(this.professionFemaleJson);

    },

 

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.day = this.randomDay();
        this.person.month = this.randomMonth();
        this.person.yearBirth = this.randomYearBirth();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.patronymic = this.randomPatronymic();
        this.person.profession = this.randomProfession();
        
        return this.person;

    },
    
    
    
    
    };


