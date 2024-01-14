const allwords = [
    {
    "name": { "arabic": "الضمائر", "english": "Pronouns" },
    "words": [
        { "arabic": "أنا", "english": "I" },
        { "arabic": "أنت", "english": "You" },
        { "arabic": "هو", "english": "He" },
        { "arabic": "هي", "english": "She" },
        { "arabic": "هو/هي للأشياء", "english": "It" },
        { "arabic": "نحن", "english": "We" },
        { "arabic": "هم/هنّ", "english": "They" },
        { "arabic": "أخبرني", "english": "He told me" },
        { "arabic": "أخبرتك", "english": "I told you" },
        { "arabic": "أخبرته", "english": "I told him" },
        { "arabic": "أخبرتها", "english": "I told her" },
        { "arabic": "أخبرنا", "english": "He told us" },
        { "arabic": "أخبرتهم", "english": "I told them" },
        { "arabic": "كتابي", "english": "My book" },
        { "arabic": "كتابك", "english": "Your book" },
        { "arabic": "كتابه", "english": "His book" },
        { "arabic": "كتابها", "english": "Her book" },
        { "arabic": "كتابنا", "english": "Our book" },
        { "arabic": "كتابهم", "english": "Their book" },
        { "arabic": "كتابها", "english": "Its book" },
        { "arabic": "ملكي/لي", "english": "Mine" },
        { "arabic": "ملكك/لك", "english": "Yours" },
        { "arabic": "ملكه/له", "english": "His" },
        { "arabic": "ملكها/لها", "english": "Hers" },
        { "arabic": "ملكنا/لنا", "english": "Ours" },
        { "arabic": "ملكهم/لهم", "english": "Theirs" }
    ]
    },
    {
    "name": { "arabic": "الأعداد", "english": "Numbers" },
    "words": [
        { "arabic": "واحد", "english": "One" },
        { "arabic": "اثنان", "english": "Two" },
        { "arabic": "ثلاثة", "english": "Three" },
        { "arabic": "أربعة", "english": "Four" },
        { "arabic": "خمسة", "english": "Five" },
        { "arabic": "ستة", "english": "Six" },
        { "arabic": "سبعة", "english": "Seven" },
        { "arabic": "ثمانية", "english": "Eight" },
        { "arabic": "تسعة", "english": "Nine" },
        { "arabic": "عشرة", "english": "Ten" },
        { "arabic": "أحد عشر", "english": "Eleven" },
        { "arabic": "اثنا عشر", "english": "Twelve" },
        { "arabic": "عشرون", "english": "Twenty" },
        { "arabic": "ثلاثون", "english": "Thirty" },
        { "arabic": "أربعون", "english": "Forty" },
        { "arabic": "خمسون", "english": "Fifty" },
        { "arabic": "مئة", "english": "Hundred" }
    ]
    },
    {
    "name": { "arabic": "الألوان", "english": "Colors" },
    "words": [
        { "arabic": "أحمر", "english": "Red" },
        { "arabic": "أزرق", "english": "Blue" },
        { "arabic": "أخضر", "english": "Green" },
        { "arabic": "أصفر", "english": "Yellow" },
        { "arabic": "برتقالي", "english": "Orange" },
        { "arabic": "بنفسجي", "english": "Purple" },
        { "arabic": "أسود", "english": "Black" },
        { "arabic": "أبيض", "english": "White" },
        { "arabic": "بني", "english": "Brown" },
        { "arabic": "وردي", "english": "Pink" }
    ]
    },
    {
    "name": { "arabic": "أدوات الاستفهام", "english": "Question Words" },
    "words": [
        { "arabic": "ما/ماذا", "english": "What" },
        { "arabic": "متى", "english": "When" },
        { "arabic": "أين", "english": "Where" },
        { "arabic": "كيف/كم", "english": "How" },
        { "arabic": "كم عدد", "english": "How many" },
        { "arabic": "كم الكمية / كم السعر", "english": "How much" },
        { "arabic": "لماذا", "english": "Why" },
        { "arabic": "أي", "english": "Which" },
        { "arabic": "من", "english": "Who" },
        { "arabic": "لمن", "english": "Whose" }
    ]
    },
    {
    "name": { "arabic": "الأيام", "english": "Days" },
    "words": [
        { "arabic": "الاثنين", "english": "Monday" },
        { "arabic": "الثلاثاء", "english": "Tuesday" },
        { "arabic": "الأربعاء", "english": "Wednesday" },
        { "arabic": "الخميس", "english": "Thursday" },
        { "arabic": "الجمعة", "english": "Friday" },
        { "arabic": "السبت", "english": "Saturday" },
        { "arabic": "الأحد", "english": "Sunday" }
    ]
    },
    {
    "name": { "arabic": "الأشهر", "english": "Months" },
    "words": [
        { "arabic": "يناير", "english": "January" },
        { "arabic": "فبراير", "english": "February" },
        { "arabic": "مارس", "english": "March" },
        { "arabic": "أبريل", "english": "April" },
        { "arabic": "مايو", "english": "May" },
        { "arabic": "يونيو", "english": "June" },
        { "arabic": "يوليو", "english": "July" },
        { "arabic": "أغسطس", "english": "August" },
        { "arabic": "سبتمبر", "english": "September" },
        { "arabic": "أكتوبر", "english": "October" },
        { "arabic": "نوفمبر", "english": "November" },
        { "arabic": "ديسمبر", "english": "December" }
    ]
    },
    {
    "name": { "arabic": "فصول السنة", "english": "Seasons" },
    "words": [
        { "arabic": "الربيع", "english": "Spring" },
        { "arabic": "الصيف", "english": "Summer" },
        { "arabic": "الخريف", "english": "Autumn/Fall" },
        { "arabic": "الشتاء", "english": "Winter" }
    ]
    },
    {
    "name": { "arabic": "الأسرة", "english": "Family" },
    "words": [
        { "arabic": "أم", "english": "Mother" },
        { "arabic": "أب", "english": "Father" },
        { "arabic": "أخ", "english": "Brother" },
        { "arabic": "أخت", "english": "Sister" },
        { "arabic": "جدة", "english": "Grandmother" },
        { "arabic": "جد", "english": "Grandfather" },
        { "arabic": "عمة / خالة", "english": "Aunt" },
        { "arabic": "عم / خال", "english": "Uncle" },
        { "arabic": "ابن عم / بنت عم", "english": "Cousin" }
    ]
    },
    {
    "name": { "arabic": "التحيات", "english": "Greetings" },
    "words": [
        { "arabic": "مرحبًا", "english": "Hello" },
        { "arabic": "مرحبًا", "english": "Hi" },
        { "arabic": "صباح الخير", "english": "Good Morning" },
        { "arabic": "مساء الخير : تستعمل بعد الظهر", "english": "Good Afternoon" },
        { "arabic": "مساء الخير", "english": "Good Evening" },
        { "arabic": "وداعًا", "english": "Goodbye" },
        { "arabic": "إلى اللقاء", "english": "Bye" },
        { "arabic": "أراك لاحقًا", "english": "See You Later" }
    ]
    },
    {
    "name": { "arabic": "أفعال", "english": "Verbs" },
    "words": [
        { "arabic": "يأكل", "english": "Eat" },
        { "arabic": "يشرب", "english": "Drink" },
        { "arabic": "ينام", "english": "Sleep" },
        { "arabic": "يستيقظ", "english": "Wake Up" },
        { "arabic": "يجري", "english": "Run" },
        { "arabic": "يمشي", "english": "Walk" },
        { "arabic": "يتحدث", "english": "Talk" },
        { "arabic": "يستمع", "english": "Listen" },
        { "arabic": "يشاهد", "english": "Watch" },
        { "arabic": "يقرأ", "english": "Read" },
        { "arabic": "يكتب", "english": "Write" },
        { "arabic": "يلعب", "english": "Play" },
        { "arabic": "يدرس", "english": "Study" },
        { "arabic": "يستعمل", "english": "Use" },
        { "arabic": "يصرخ", "english": "Scream" },
        { "arabic": "يضرب", "english": "Hit" },
        { "arabic": "ينادي", "english": "Call" },
        { "arabic": "يفعل", "english": "Do" },
        { "arabic": "يحل الواجب", "english": "Do Homework" },
        { "arabic": "يأتي", "english": "Come" },
        { "arabic": "يستمتع", "english": "Enjoy" }
    ]
    },
    {
    "name": { "arabic": "المدرسة", "english": "School" },
    "words": [
        { "arabic": "فصل دراسي", "english": "Classroom" },
        { "arabic": "مدرسة", "english": "School" },
        { "arabic": "معلم/معلمة", "english": "Teacher" },
        { "arabic": "طالب/طالبة", "english": "Student" },
        { "arabic": "كتاب", "english": "Book" },
        { "arabic": "قلم", "english": "Pen" },
        { "arabic": "قلم رصاص", "english": "Pencil" },
        { "arabic": "مكتب", "english": "Desk" },
        { "arabic": "كرسي", "english": "Chair" },
        { "arabic": "لوحة", "english": "Board" }
    ]
    },
    {
    "name": { "arabic": "الطعام", "english": "Food" },
    "words": [
        { "arabic": "تفاحة", "english": "Apple" },
        { "arabic": "موز", "english": "Banana" },
        { "arabic": "برتقال", "english": "Orange" },
        { "arabic": "خبز", "english": "Bread" },
        { "arabic": "أرز", "english": "Rice" },
        { "arabic": "حليب", "english": "Milk" },
        { "arabic": "ماء", "english": "Water" },
        { "arabic": "قهوة", "english": "Coffee" },
        { "arabic": "شاي", "english": "Tea" },
        { "arabic": "ليمون", "english": "Lemon" },
        { "arabic": "بصل", "english": "Onion" },
        { "arabic": "خيار", "english": "Cucumber" },
        { "arabic": "جزر", "english": "Carrot" },
        { "arabic": "فلفل", "english": "Pepper" },
        { "arabic": "ثوم", "english": "Garlic" },
        { "arabic": "فطور", "english": "Breakfast" },
        { "arabic": "غداء", "english": "Lunch" },
        { "arabic": "عشاء", "english": "Dinner" }
    ]
    },
    {
    "name": { "arabic": "حيوانات", "english": "Animals" },
    "words": [
        { "arabic": "كلب", "english": "Dog" },
        { "arabic": "قطة", "english": "Cat" },
        { "arabic": "طائر", "english": "Bird" },
        { "arabic": "سمك", "english": "Fish" },
        { "arabic": "فيل", "english": "Elephant" },
        { "arabic": "أسد", "english": "Lion" },
        { "arabic": "نمر", "english": "Tiger" },
        { "arabic": "زرافة", "english": "Giraffe" },
        { "arabic": "قرد", "english": "Monkey" },
        { "arabic": "أرنب", "english": "Rabbit" },
        { "arabic": "حصان", "english": "Horse" },
        { "arabic": "بقرة", "english": "Cow" },
        { "arabic": "خروف", "english": "Sheep" }
    ]
    },
    {
    "name": { "arabic": "أماكن", "english": "Places" },
    "words": [
        { "arabic": "منزل", "english": "Home" },
        { "arabic": "حديقة", "english": "Park" },
        { "arabic": "شاطئ", "english": "Beach" },
        { "arabic": "مطعم", "english": "Restaurant" },
        { "arabic": "مستشفى", "english": "Hospital" },
        { "arabic": "متجر", "english": "Store" },
        { "arabic": "مكتبة", "english": "Library" },
        { "arabic": "سينما", "english": "Cinema" },
        { "arabic": "متحف", "english": "Museum" },
        { "arabic": "مطار", "english": "Airport" },
        { "arabic": "صيدلية", "english": "Pharmacy" }
    ]
    },
    {
    "name": { "arabic": "أعضاء الجسم", "english": "Body Parts" },
    "words": [
        { "arabic": "رأس", "english": "Head" },
        { "arabic": "عيون", "english": "Eyes" },
        { "arabic": "أنف", "english": "Nose" },
        { "arabic": "فم", "english": "Mouth" },
        { "arabic": "أذن", "english": "Ear" },
        { "arabic": "يد", "english": "Hand" },
        { "arabic": "قدم", "english": "Foot" },
        { "arabic": "أقدام", "english": "Feet" },
        { "arabic": "ساق", "english": "Leg" },
        { "arabic": "ذراع", "english": "Arm" },
        { "arabic": "معدة", "english": "Stomach" },
        { "arabic": "ظهر", "english": "Back" },
        { "arabic": "قلب", "english": "Heart" },
        { "arabic": "وجه", "english": "Face" }
    ]
    },
    {
    "name": { "arabic": "وسائل النقل", "english": "Transportation" },
    "words": [
        { "arabic": "سيارة", "english": "Car" },
        { "arabic": "حافلة", "english": "Bus" },
        { "arabic": "قطار", "english": "Train" },
        { "arabic": "دراجة", "english": "Bicycle" },
        { "arabic": "طائرة", "english": "Plane" },
        { "arabic": "قارب", "english": "Boat" },
        { "arabic": "ركوب", "english": "Ride" },
        { "arabic": "دراجة نارية", "english": "Motorcycle" },
        { "arabic": "تاكسي", "english": "Taxi" },
        { "arabic": "شاحنة", "english": "Truck" },
        { "arabic": "مروحية", "english": "Helicopter" }
    ]
    },
    {
    "name": { "arabic": "مشاعر/عواطف", "english": "Emotions" },
    "words": [
        { "arabic": "سعيد", "english": "Happy" },
        { "arabic": "حزين", "english": "Sad" },
        { "arabic": "غاضب", "english": "Angry" },
        { "arabic": "متحمس", "english": "Excited" },
        { "arabic": "متعب", "english": "Tired" },
        { "arabic": "مندهش", "english": "Surprised" },
        { "arabic": "مصدوم", "english": "Shocked" },
        { "arabic": "خائف", "english": "Scared" },
        { "arabic": "ممل", "english": "Boring" },
        { "arabic": "طفشان", "english": "Bored" },
        { "arabic": "هادئ", "english": "Calm" },
        { "arabic": "مشاكس", "english": "Naughty" },
        { "arabic": "عصبي", "english": "Nervous" },
        { "arabic": "مرتبك", "english": "Confused" },
        { "arabic": "مسرور", "english": "Pleased" },
        { "arabic": "ممتن", "english": "Grateful" },
        { "arabic": "أناني", "english": "Selfish" }
    ]
    },
    {
    "name": { "arabic": "أشياء المنزل", "english": "Household Items" },
    "words": [
        { "arabic": "طاولة", "english": "Table" },
        { "arabic": "كرسي", "english": "Chair" },
        { "arabic": "سرير", "english": "Bed" },
        { "arabic": "أريكة", "english": "Sofa" },
        { "arabic": "مصباح", "english": "Lamp" },
        { "arabic": "ساعة", "english": "Clock" },
        { "arabic": "مرآة", "english": "Mirror" },
        { "arabic": "ثلاجة", "english": "Refrigerator" },
        { "arabic": "موقد", "english": "Stove" },
        { "arabic": "صحن", "english": "Plate" },
        { "arabic": "كوب", "english": "Cup" },
        { "arabic": "ملعقة", "english": "Spoon" },
        { "arabic": "شوكة", "english": "Fork" },
        { "arabic": "سكينة", "english": "Knife" },
        { "arabic": "باب", "english": "Door" },
        { "arabic": "نافذة", "english": "Window" }
    ]
    },
    {
    "name": { "arabic": "الطقس", "english": "Weather" },
    "words": [
        { "arabic": "شمس", "english": "Sun" },
        { "arabic": "مطر", "english": "Rain" },
        { "arabic": "سحابة", "english": "Cloud" },
        { "arabic": "ثلج", "english": "Snow" },
        { "arabic": "رياح", "english": "Wind" },
        { "arabic": "عاصفة", "english": "Storm" },
        { "arabic": "برق", "english": "Lightning" },
        { "arabic": "رعد", "english": "Thunder" },
        { "arabic": "قوس قزح", "english": "Rainbow" },
        { "arabic": "ضباب", "english": "Fog" },
        { "arabic": "مشمس", "english": "Sunny" },
        { "arabic": "ممطر", "english": "Rainy" },
        { "arabic": "مغيم", "english": "Cloudy" }
    ]
    },
    {
    "name": { "arabic": "الطبيعة", "english": "Nature" },
    "words": [
        { "arabic": "شجرة", "english": "Tree" },
        { "arabic": "زهرة", "english": "Flower" },
        { "arabic": "عشب", "english": "Grass" },
        { "arabic": "جبل", "english": "Mountain" },
        { "arabic": "نهر", "english": "River" },
        { "arabic": "بحيرة", "english": "Lake" },
        { "arabic": "محيط", "english": "Ocean" },
        { "arabic": "سماء", "english": "Sky" },
        { "arabic": "نجمة", "english": "Star" },
        { "arabic": "قمر", "english": "Moon" },
        { "arabic": "أرض", "english": "Earth" },
        { "arabic": "الهواء", "english": "Air" },
        { "arabic": "حجر", "english": "Stone" }
    ]
    },
    {
    "name": { "arabic": "أعمال و مهن", "english": "Jobs and Professions" },
    "words": [
        { "arabic": "طبيب", "english": "Doctor" },
        { "arabic": "ممرض", "english": "Nurse" },
        { "arabic": "معلم", "english": "Teacher" },
        { "arabic": "مهندس", "english": "Engineer" },
        { "arabic": "ضابط شرطة", "english": "Police Officer" },
        { "arabic": "رجل إطفاء", "english": "Firefighter" },
        { "arabic": "طباخ", "english": "Cook" },
        { "arabic": "فنان", "english": "Artist" },
        { "arabic": "مغني", "english": "Singer" },
        { "arabic": "كاتب", "english": "Writer" },
        { "arabic": "فلاح", "english": "Farmer" },
        { "arabic": "عالم", "english": "Scientist" },
        { "arabic": "طيار", "english": "Pilot" },
        { "arabic": "ممثل", "english": "Actor" }
    ]
    },
    {
    "name": { "arabic": "التقنية", "english": "Technology" },
    "words": [
        { "arabic": "حاسوب", "english": "Computer" },
        { "arabic": "هاتف", "english": "Phone" },
        { "arabic": "تلفاز", "english": "Television" },
        { "arabic": "الإنترنت", "english": "Internet" },
        { "arabic": "كاميرا", "english": "Camera" },
        { "arabic": "لوحي", "english": "Tablet" },
        { "arabic": "لوحة المفاتيح", "english": "Keyboard" },
        { "arabic": "فأرة", "english": "Mouse" },
        { "arabic": "شاشة", "english": "Screen" },
        { "arabic": "شاحن", "english": "Charger" }
    ]
    },
    {
    "name": { "arabic": "صفات", "english": "Adjectives" },
    "words": [
        { "arabic": "كبير", "english": "Big" },
        { "arabic": "صغير", "english": "Small" },
        { "arabic": "طويل", "english": "Tall" },
        { "arabic": "قصير", "english": "Short" },
        { "arabic": "سريع", "english": "Fast" },
        { "arabic": "بطيء", "english": "Slow" },
        { "arabic": "قديم", "english": "Old" },
        { "arabic": "شاب", "english": "Young" },
        { "arabic": "حزين", "english": "Sad" },
        { "arabic": "حار", "english": "Hot" },
        { "arabic": "بارد", "english": "Cold" },
        { "arabic": "جميل", "english": "Beautiful" },
        { "arabic": "قبيح", "english": "Ugly" },
        { "arabic": "ذكي", "english": "Smart" },
        { "arabic": "مضحك", "english": "Funny" },
        { "arabic": "جاد", "english": "Serious" },
        { "arabic": "غالي", "english": "Expensive" },
        { "arabic": "صعب", "english": "Difficult" },
        { "arabic": "مريح", "english": "Comfortable" },
        { "arabic": "خطير", "english": "Dangerous" }
    ]
    },
    {
    "name": { "arabic": "رياضات وأنشطة", "english": "Sports and Activities" },
    "words": [
        { "arabic": "كرة قدم", "english": "Soccer/Football" },
        { "arabic": "كرة السلة", "english": "Basketball" },
        { "arabic": "السباحة", "english": "Swimming" },
        { "arabic": "الركض", "english": "Running" },
        { "arabic": "ركوب الدراجة", "english": "Cycling" },
        { "arabic": "الرقص", "english": "Dancing" },
        { "arabic": "الرسم", "english": "Painting" },
        { "arabic": "الغناء", "english": "Singing" },
        { "arabic": "القراءة", "english": "Reading" },
        { "arabic": "الكتابة", "english": "Writing" },
        { "arabic": "الطبخ", "english": "Cooking" },
        { "arabic": "السفر", "english": "Traveling" }
    ]
    },
    {
    "name": { "arabic": "اتجاهات", "english": "Directions" },
    "words": [
        { "arabic": "اليسار", "english": "Left" },
        { "arabic": "اليمين", "english": "Right" },
        { "arabic": "إلى الأمام", "english": "Forward" },
        { "arabic": "إلى الوراء", "english": "Backward" },
        { "arabic": "فوق", "english": "Up" },
        { "arabic": "تحت", "english": "Down" },
        { "arabic": "الشمال", "english": "North" },
        { "arabic": "الجنوب", "english": "South" },
        { "arabic": "الشرق", "english": "East" },
        { "arabic": "الغرب", "english": "West" }
    ]
    },
    {
    "name": { "arabic": "تسوق", "english": "Shopping" },
    "words": [
        { "arabic": "مال", "english": "Money" },
        { "arabic": "نقدًا", "english": "Cash" },
        { "arabic": "بطاقة ائتمان", "english": "Credit Card" },
        { "arabic": "محفظة", "english": "Wallet" },
        { "arabic": "محل", "english": "Shop" },
        { "arabic": "يشتري", "english": "Buy" },
        { "arabic": "يبيع", "english": "Sell" },
        { "arabic": "السعر", "english": "Price" },
        { "arabic": "خصم", "english": "Discount" },
        { "arabic": "تخفيض", "english": "Sale" }
    ]
    },
    {
    "name": { "arabic": "الصحة", "english": "Health" },
    "words": [
        { "arabic": "مستشفى", "english": "Hospital" },
        { "arabic": "طبيب", "english": "Doctor" },
        { "arabic": "ممرض", "english": "Nurse" },
        { "arabic": "دواء", "english": "Medicine" },
        { "arabic": "حبة", "english": "Pill" },
        { "arabic": "وصفة طبية", "english": "Prescription" },
        { "arabic": "صحي", "english": "Healthy" },
        { "arabic": "مريض", "english": "Sick" },
        { "arabic": "ألم", "english": "Pain" },
        { "arabic": "إصابة", "english": "Injury" }
    ]
    },
    {
    "name": { "arabic": "السفر", "english": "Travel" },
    "words": [
        { "arabic": "جواز سفر", "english": "Passport" },
        { "arabic": "تذكرة", "english": "Ticket" },
        { "arabic": "مطار", "english": "Airport" },
        { "arabic": "محطة القطار", "english": "Train Station" },
        { "arabic": "موقف الحافلة", "english": "Bus Stop" },
        { "arabic": "فندق", "english": "Hotel" },
        { "arabic": "حقيبة سفر", "english": "Suitcase" },
        { "arabic": "خريطة", "english": "Map" },
        { "arabic": "وجهة", "english": "Destination" }
    ]
    },
    {
    "name": { "arabic": "الوقت", "english": "Time" },
    "words": [
        { "arabic": "ساعة", "english": "Hour" },
        { "arabic": "دقيقة", "english": "Minute" },
        { "arabic": "ثانية", "english": "Second" },
        { "arabic": "يوم", "english": "Day" },
        { "arabic": "أسبوع", "english": "Week" },
        { "arabic": "شهر", "english": "Month" },
        { "arabic": "سنة", "english": "Year" },
        { "arabic": "اليوم", "english": "Today" },
        { "arabic": "غدًا", "english": "Tomorrow" },
        { "arabic": "أمس", "english": "Yesterday" }
    ]
    },
    {
    "name": { "arabic": "الأشكال", "english": "Shapes" },
    "words": [
        { "arabic": "دائرة", "english": "Circle" },
        { "arabic": "مربع", "english": "Square" },
        { "arabic": "مثلث", "english": "Triangle" },
        { "arabic": "مستطيل", "english": "Rectangle" },
        { "arabic": "بيضاوي", "english": "Oval" },
        { "arabic": "نجمة", "english": "Star" }
    ]
    },
    {
    "name": { "arabic": "المدينة", "english": "City" },
    "words": [
        { "arabic": "شارع", "english": "Street" },
        { "arabic": "طريق", "english": "Road" },
        { "arabic": "حي", "english": "Neighborhood" },
        { "arabic": "طريق سريع", "english": "Highway" },
        { "arabic": "مبنى", "english": "Building" },
        { "arabic": "المرور", "english": "Traffic" }
    ]
    },
    {
    "name": { "arabic": "عبارات", "english": "Phrases" },
    "words": [
        { "arabic": "كيف حالك؟", "english": "How are you?" },
        { "arabic": "كم عمرك؟", "english": "How old are you?" },
        { "arabic": ".. اسمي", "english": "My name is..." },
        { "arabic": "افتح كتابك", "english": "Open your book" },
        { "arabic": "أغلق كتابك", "english": "Close your book" },
        { "arabic": "اجلس", "english": "Sit down" },
        { "arabic": "قف", "english": "Stand up" },
        { "arabic": "ضع قلمك", "english": "Put down your pen" },
        { "arabic": "ارفع يدك", "english": "Raise your hand" },
        { "arabic": "أخفض يدك", "english": "Put your hand down" },
        { "arabic": "هل أنت مستعد؟", "english": "Are you ready?" },
        { "arabic": "هل انتهيت؟", "english": "Have you finished?" },
        { "arabic": "عندي سؤال", "english": "I have a question" },
        { "arabic": "لا أعرف", "english": "I don't know" },
        { "arabic": "لم أفهم", "english": "I don't understand" },
        { "arabic": "فهمت", "english": "I see" },
        { "arabic": "فهمت", "english": "I understand" }
    ]
    }
]

export default allwords;