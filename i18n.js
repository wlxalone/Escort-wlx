'use strict';

(() => {
  const STORAGE_KEY_LANGUAGE = 'eliteconnect_language';
  const DEFAULT_LANGUAGE = 'EN';
  const LANGUAGE_CONFIG = {
    EN: { code: 'EN', label: 'English', locale: 'en', dir: 'ltr' },
    AR: { code: 'AR', label: 'العربية', locale: 'ar', dir: 'rtl' },
    RU: { code: 'RU', label: 'Русский', locale: 'ru', dir: 'ltr' }
  };

  const I18N = {
    EN: {
      titles: {
        home: 'EliteConnect - Premium Models',
        about: 'About Us | EliteConnect',
        escort: 'Escort Profiles | EliteConnect',
        apartments: 'Apartments | EliteConnect',
        contact: 'Contact | EliteConnect',
        profile: 'Model Profile | EliteConnect',
        profileWithName: '{{name}} | EliteConnect',
        signin: 'Sign In | EliteConnect',
        signup: 'Sign Up | EliteConnect'
      },
      common: {
        ageGateTitle: 'Age Verification',
        ageGateText: 'You must be 18 years or older to enter this website. By clicking "Enter", you confirm you are of legal age.',
        ageGateEnter: 'Enter',
        ageGateLeave: 'Exit',
        navHome: 'Home',
        navAbout: 'About us',
        navEscort: 'Escort',
        navApartments: 'Apartments',
        navContact: 'Contact',
        signIn: 'Sign In',
        signUp: 'Sign Up',
        browse: 'Browse',
        allModels: 'All models',
        newFaces: 'New faces',
        onlineNow: 'Online now',
        cities: 'Cities',
        info: 'Info',
        postAd: 'Post an ad',
        account: 'Account',
        footerTagline: 'Premium verified models platform focused on discretion, elegant design and direct contact.',
        disclaimer: 'This website contains adult content intended for visitors aged 18+ only. All listings are demo data for presentation purposes.',
        copy: '(c) 2026 EliteConnect. All rights reserved.',
        selectCity: 'Select city',
        allCities: 'All Cities',
        ageRange: 'Age range',
        anyAge: 'Any age',
        category: 'Category',
        anyCategory: 'Any category',
        search: 'Search',
        min: 'Min',
        max: 'Max',
        reset: 'Reset',
        apply: 'Apply',
        popular: 'Popular:',
        all: 'All',
        new: 'New',
        verified: 'Verified',
        openMenu: 'Open menu',
        gridView: 'Grid view',
        listView: 'List view'
      },
      home: {
        heroBadge: 'Premium verified models',
        heroTitleHtml: 'Find Elite Models<br/><span class="hero__title--accent">Across Dubai</span>',
        heroSubtitle: 'Browse premium listings, verified models and private apartments in the biggest cities.',
        tagNewToday: 'New today',
        statActiveModels: 'Active models',
        statCitiesCovered: 'Cities covered',
        statVerifiedAds: 'Verified ads',
        statSupport: 'Support',
        sectionCitiesTitle: 'Browse by City',
        sectionCitiesSub: 'Discover models and apartments in major locations across the region.',
        howTitle: 'How It Works',
        howSub: 'A simple path from search to contact.',
        step1Title: 'Browse Models',
        step1Text: 'Search by city, age and category. Each card links directly to a working model page.',
        step2Title: 'Contact Directly',
        step2Text: 'Open the model, review details, choose rates and send a message from the contact page.',
        step3Title: 'Book with Confidence',
        step3Text: 'Use saved favorites, city filters and private apartments to shape the right experience.',
        ctaTitle: 'Want to Post Your Ad?',
        ctaText: 'Join verified models, get featured placement and manage requests from one premium showcase.',
        ctaPrimary: 'Post an Ad',
        ctaSecondary: 'Learn More'
      },
      escort: {
        pageTitle: 'Escort Profiles',
        pageSub: 'Here you will find the list of our beautiful escorts across the UAE.',
        cityLabel: 'City',
        ageLabel: 'Age',
        heightLabel: 'Height (cm)',
        weightLabel: 'Weight (kg)',
        bustLabel: 'Bust Size',
        bustPlaceholder: 'B, C, D',
        emptyTitle: 'No escorts found',
        emptyText: 'Try another city or widen the filters.'
      },
      about: {
        pageTitle: 'Our Agency & Rules',
        pageSub: 'We specialize in providing exclusive companionship services with the most beautiful, educated and charming models. Your comfort, privacy, and satisfaction are our highest priorities.',
        reasonsTitle: 'Why Choose Us?',
        feature1Title: 'Absolute Discretion',
        feature1Text: 'Your privacy is our top priority. All interactions and personal information are handled with the utmost confidentiality.',
        feature2Title: 'Verified Profiles',
        feature2Text: 'All photos are 100% real and regularly updated. What you see is what you get, ensuring a genuine experience.',
        feature3Title: 'Professional Approach',
        feature3Text: 'We work only with reliable and responsible models who are not only beautiful but also intelligent and personable.',
        feature4Title: 'Flexible Conditions',
        feature4Text: 'Whether it\'s a meeting in your apartment, a hotel, or companionship for travel, we cater to your specific needs.'
      },
      apartmentsPage: {
        pageTitle: 'Private Apartments',
        pageSub: 'Clean, discreet spaces for private meetings across the main cities.'
      },
      contact: {
        pageTitle: 'Contact',
        pageSub: 'Send a direct request, ask about an apartment or discuss listing publication.',
        card1Title: 'Fast response',
        card1Text: 'Use the form below to contact the selected model or the platform team.',
        card2Title: 'Private handling',
        card2Text: 'Requests are handled discreetly and can later be redirected into a real CRM or admin inbox.',
        formTitle: 'Send a Message',
        formSub: 'This demo stores no real data. Submitting shows the completed interaction flow.',
        nameLabel: 'Your name',
        namePlaceholder: 'Enter your name',
        emailLabel: 'Email',
        profileLabel: 'Model',
        cityLabel: 'City',
        messageLabel: 'Message',
        messagePlaceholder: 'Tell us what you need',
        submit: 'Send Message',
        selectModel: 'Select model'
      },
      signin: {
        pageTitle: 'Sign In',
        pageSub: 'Demo account access for advertisers, assistants and moderators.',
        formTitle: 'Welcome back',
        formSub: 'This is a front-end demo flow. Real authentication can be connected later.',
        emailLabel: 'Email',
        passwordLabel: 'Password',
        passwordPlaceholder: 'Enter your password',
        submit: 'Sign In'
      },
      signup: {
        pageTitle: 'Create an Account',
        pageSub: 'Register a new profile or request featured placement inside the catalog.',
        card1Title: 'Create profile',
        card1Text: 'Add contact details, city, gallery and profile summary in a single onboarding form.',
        card2Title: 'Await moderation',
        card2Text: 'In a production version the listing would enter moderation before it becomes visible in the catalog.',
        formTitle: 'Registration Request',
        formSub: 'This demo collects listing information and completes the front-end flow.',
        displayNameLabel: 'Display name',
        displayNamePlaceholder: 'Profile or company name',
        emailLabel: 'Email',
        cityLabel: 'City',
        accountTypeLabel: 'Account type',
        descriptionLabel: 'Short description',
        descriptionPlaceholder: 'Tell us about the listing',
        submit: 'Create Account'
      },
      profilePage: {
        breadcrumbCatalog: 'Models',
        from: 'From:',
        availability: 'Availability:',
        languages: 'Languages:',
        age: 'Age',
        height: 'Height',
        weight: 'Weight',
        bust: 'Bust',
        aboutMe: 'About Me',
        services: 'Services',
        rates: 'Rates',
        callNow: 'Call Now',
        message: 'Message',
        related: 'Similar Models'
      },
      dynamic: {
        noModelsFound: 'No profiles found',
        showingModels: 'Showing {{visible}} of {{total}} profiles',
        loadMoreModels: 'Load More Profiles',
        allModelsLoaded: 'All profiles loaded',
        cityCount: '{{count}} profiles',
        messageButton: 'Message',
        viewProfile: 'View Profile',
        moreDetails: 'More Details',
        bookNow: 'Book',
        yearsUnit: 'years',
        openProfileAria: 'Open {{name}} profile',
        saveModelAria: 'Save {{name}}',
        galleryImageAlt: 'Gallery image {{index}}',
        mainPhotoAlt: '{{name}} main photo',
        contactStatus: 'Message sent. We will contact you shortly regarding {{target}}.',
        contactTarget: '{{name}} in {{city}}',
        team: 'the team',
        signInStatus: 'Demo sign in completed. Connect the real backend auth flow next.',
        signUpStatus: 'Registration request sent. A manager can now review the listing details.',
        onRequest: 'On request',
        perHourSuffix: ' / hour',
        dailyPrefix: 'Daily'
      },
      badges: {
        vip: 'VIP',
        new: 'NEW',
        online: 'Online',
        verified: 'Verified'
      },
      accountTypes: {
        independent: 'Independent profile',
        agency: 'Agency',
        apartments: 'Apartment host'
      }
    }
  };

  I18N.AR = {
    titles: {
      home: 'EliteConnect - موديلات بريميوم',
      about: 'من نحن | EliteConnect',
      escort: 'ملفات المرافقة | EliteConnect',
      apartments: 'الشقق | EliteConnect',
      contact: 'اتصل بنا | EliteConnect',
      profile: 'ملف الموديل | EliteConnect',
      profileWithName: '{{name}} | EliteConnect',
      signin: 'تسجيل الدخول | EliteConnect',
      signup: 'إنشاء حساب | EliteConnect'
    },
    common: {
      ageGateTitle: 'التحقق من العمر',
      ageGateText: 'يجب أن يكون عمرك 18 عامًا أو أكثر للدخول إلى هذا الموقع. بالنقر على "دخول"، فإنك تؤكد أنك في السن القانونية.',
      ageGateEnter: 'دخول',
      ageGateLeave: 'خروج',
      navHome: 'الرئيسية',
      navAbout: 'من نحن',
      navEscort: 'مرافقة',
      navApartments: 'الشقق',
      navContact: 'اتصل بنا',
      signIn: 'تسجيل الدخول',
      signUp: 'إنشاء حساب',
      browse: 'تصفح',
      allModels: 'كل الموديلات',
      newFaces: 'وجوه جديدة',
      onlineNow: 'متصل الآن',
      cities: 'المدن',
      info: 'معلومات',
      postAd: 'أضف إعلانًا',
      account: 'الحساب',
      footerTagline: 'منصة موديلات موثقة تركز على الخصوصية والتصميم الأنيق والتواصل المباشر.',
      disclaimer: 'يحتوي هذا الموقع على محتوى للبالغين 18+ فقط. جميع القوائم المعروضة بيانات تجريبية لأغراض العرض.',
      copy: '© 2026 EliteConnect. جميع الحقوق محفوظة.',
      selectCity: 'اختر المدينة',
      allCities: 'كل المدن',
      ageRange: 'الفئة العمرية',
      anyAge: 'أي عمر',
      category: 'الفئة',
      anyCategory: 'أي فئة',
      search: 'بحث',
      min: 'الحد الأدنى',
      max: 'الحد الأقصى',
      reset: 'إعادة',
      apply: 'تطبيق',
      popular: 'الأكثر شيوعًا:',
      all: 'الكل',
      new: 'جديد',
      verified: 'موثق',
      openMenu: 'فتح القائمة',
      gridView: 'عرض شبكي',
      listView: 'عرض قائمة'
    },
    home: {
      heroBadge: 'موديلات موثقة بريميوم',
      heroTitleHtml: 'اكتشف نخبة الموديلات<br/><span class="hero__title--accent">في دبي</span>',
      heroSubtitle: 'تصفح الإعلانات المميزة والموديلات الموثقة والشقق الخاصة في أكبر المدن.',
      tagNewToday: 'جديد اليوم',
      statActiveModels: 'موديلات نشطة',
      statCitiesCovered: 'مدن مغطاة',
      statVerifiedAds: 'إعلانات موثقة',
      statSupport: 'دعم',
      sectionCitiesTitle: 'تصفح حسب المدينة',
      sectionCitiesSub: 'اكتشف الموديلات والشقق في أبرز المواقع داخل المنطقة.',
      howTitle: 'كيف يعمل الموقع',
      howSub: 'مسار بسيط من البحث إلى التواصل.',
      step1Title: 'تصفح الموديلات',
      step1Text: 'ابحث حسب المدينة والعمر والفئة. كل بطاقة تفتح صفحة موديل تعمل بالكامل.',
      step2Title: 'تواصل مباشرة',
      step2Text: 'افتح الملف، راجع التفاصيل، اختر الأسعار وأرسل رسالة من صفحة التواصل.',
      step3Title: 'احجز بثقة',
      step3Text: 'استخدم المفضلة والفلاتر والشقق الخاصة لتشكيل التجربة المناسبة لك.',
      ctaTitle: 'هل تريد نشر إعلانك؟',
      ctaText: 'انضم إلى الموديلات الموثقات، واحصل على ظهور مميز وأدر الطلبات من واجهة واحدة فاخرة.',
      ctaPrimary: 'أضف إعلانًا',
      ctaSecondary: 'اعرف المزيد'
    },
    escort: {
      pageTitle: 'ملفات المرافقة',
      pageSub: 'هنا ستجد قائمة بمرافقاتنا الجميلات في أنحاء الإمارات.',
      cityLabel: 'المدينة',
      ageLabel: 'العمر',
      heightLabel: 'الطول (سم)',
      weightLabel: 'الوزن (كغ)',
      bustLabel: 'المقاس',
      bustPlaceholder: 'B, C, D',
      emptyTitle: 'لم يتم العثور على مرافقات',
      emptyText: 'جرّب مدينة أخرى أو وسّع نطاق الفلاتر.'
    },
    about: {
      pageTitle: 'وكالتنا والقواعد',
      pageSub: 'نحن متخصصون في تقديم خدمات مرافقة حصرية مع أجمل الموديلات وأكثرهن أناقة وثقافة. راحتك وخصوصيتك ورضاك هي أولويتنا القصوى.',
      reasonsTitle: 'لماذا تختارنا؟',
      feature1Title: 'سرية تامة',
      feature1Text: 'خصوصيتك هي أولويتنا الأولى. يتم التعامل مع جميع التفاعلات والبيانات الشخصية بأعلى درجات السرية.',
      feature2Title: 'ملفات موثقة',
      feature2Text: 'جميع الصور حقيقية 100% ويتم تحديثها باستمرار. ما تراه هو ما ستحصل عليه، لتجربة موثوقة وواضحة.',
      feature3Title: 'أسلوب احترافي',
      feature3Text: 'نعمل فقط مع موديلات موثوقات ومسؤولات يتمتعن بالجمال والذكاء وحسن التعامل.',
      feature4Title: 'شروط مرنة',
      feature4Text: 'سواء كان اللقاء في شقتك أو في فندق أو مرافقة أثناء السفر، فنحن نلبي احتياجاتك الخاصة.'
    },
    apartmentsPage: {
      pageTitle: 'شقق خاصة',
      pageSub: 'أماكن نظيفة وسرية للاجتماعات الخاصة عبر المدن الرئيسية.'
    },
    contact: {
      pageTitle: 'اتصل بنا',
      pageSub: 'أرسل طلبًا مباشرًا، أو اسأل عن شقة، أو ناقش نشر إعلان.',
      card1Title: 'استجابة سريعة',
      card1Text: 'استخدم النموذج أدناه للتواصل مع الموديل المحدد أو مع فريق المنصة.',
      card2Title: 'معالجة خاصة',
      card2Text: 'يتم التعامل مع الطلبات بسرية ويمكن تحويلها لاحقًا إلى CRM حقيقي أو صندوق إدارة.',
      formTitle: 'أرسل رسالة',
      formSub: 'هذا العرض لا يخزن بيانات حقيقية. الإرسال فقط يوضح مسار التفاعل الكامل.',
      nameLabel: 'اسمك',
      namePlaceholder: 'أدخل اسمك',
      emailLabel: 'البريد الإلكتروني',
      profileLabel: 'الموديل',
      cityLabel: 'المدينة',
      messageLabel: 'الرسالة',
      messagePlaceholder: 'أخبرنا بما تحتاجه',
      submit: 'إرسال الرسالة',
      selectModel: 'اختر موديل'
    },
    signin: {
      pageTitle: 'تسجيل الدخول',
      pageSub: 'وصول تجريبي للمعلنين والمساعدين والمشرفين.',
      formTitle: 'مرحبًا بعودتك',
      formSub: 'هذا مسار تجريبي للواجهة الأمامية. يمكن ربط التوثيق الحقيقي لاحقًا.',
      emailLabel: 'البريد الإلكتروني',
      passwordLabel: 'كلمة المرور',
      passwordPlaceholder: 'أدخل كلمة المرور',
      submit: 'تسجيل الدخول'
    },
    signup: {
      pageTitle: 'إنشاء حساب',
      pageSub: 'سجّل ملفًا جديدًا أو اطلب ظهورًا مميزًا داخل الكتالوج.',
      card1Title: 'أنشئ ملفًا',
      card1Text: 'أضف بيانات التواصل والمدينة والمعرض والملخص في نموذج تسجيل واحد.',
      card2Title: 'انتظر المراجعة',
      card2Text: 'في النسخة الإنتاجية سيدخل الإعلان إلى المراجعة قبل أن يصبح ظاهرًا في الكتالوج.',
      formTitle: 'طلب تسجيل',
      formSub: 'هذا العرض يجمع معلومات الإعلان ويكمل المسار الأمامي بالكامل.',
      displayNameLabel: 'الاسم المعروض',
      displayNamePlaceholder: 'اسم الملف أو الشركة',
      emailLabel: 'البريد الإلكتروني',
      cityLabel: 'المدينة',
      accountTypeLabel: 'نوع الحساب',
      descriptionLabel: 'وصف قصير',
      descriptionPlaceholder: 'أخبرنا عن الإعلان',
      submit: 'إنشاء حساب'
    },
    profilePage: {
      breadcrumbCatalog: 'الموديلات',
      from: 'السعر من:',
      availability: 'التوفر:',
      languages: 'اللغات:',
      age: 'العمر',
      height: 'الطول',
      weight: 'الوزن',
      bust: 'المقاس',
      aboutMe: 'عني',
      services: 'الخدمات',
      rates: 'الأسعار',
      callNow: 'اتصل الآن',
      message: 'رسالة',
      related: 'موديلات مشابهة'
    },
    dynamic: {
      noModelsFound: 'لم يتم العثور على ملفات',
      showingModels: 'عرض {{visible}} من أصل {{total}} ملف',
      loadMoreModels: 'تحميل المزيد من الملفات',
      allModelsLoaded: 'تم تحميل كل الملفات',
      cityCount: '{{count}} ملف',
      messageButton: 'رسالة',
      viewProfile: 'عرض الملف',
      moreDetails: 'المزيد',
      bookNow: 'احجز',
      yearsUnit: 'years',
      openProfileAria: 'فتح ملف {{name}}',
      saveModelAria: 'حفظ {{name}}',
      galleryImageAlt: 'صورة المعرض {{index}}',
      mainPhotoAlt: 'الصورة الرئيسية لـ {{name}}',
      contactStatus: 'تم إرسال الرسالة. سنتواصل معك قريبًا بخصوص {{target}}.',
      contactTarget: '{{name}} في {{city}}',
      team: 'الفريق',
      signInStatus: 'تم تسجيل الدخول التجريبي. يمكن الآن ربط مسار التوثيق الحقيقي.',
      signUpStatus: 'تم إرسال طلب التسجيل. يمكن للمدير الآن مراجعة تفاصيل الإعلان.',
      onRequest: 'عند الطلب',
      perHourSuffix: ' / ساعة',
      dailyPrefix: 'يوميًا'
    },
    badges: {
      vip: 'VIP',
      new: 'جديد',
      online: 'متصل',
      verified: 'موثق'
    },
    accountTypes: {
      independent: 'ملف مستقل',
      agency: 'وكالة',
      apartments: 'مضيف شقق'
    }
  };

  I18N.RU = {
    titles: {
      home: 'EliteConnect - Премиум модели',
      about: 'О нас | EliteConnect',
      escort: 'Каталог моделей | EliteConnect',
      apartments: 'Апартаменты | EliteConnect',
      contact: 'Контакты | EliteConnect',
      profile: 'Профиль модели | EliteConnect',
      profileWithName: '{{name}} | EliteConnect',
      signin: 'Вход | EliteConnect',
      signup: 'Регистрация | EliteConnect'
    },
    common: {
      ageGateTitle: 'Подтверждение возраста',
      ageGateText: 'Вам должно быть 18 лет или больше, чтобы войти на этот сайт. Нажимая "Войти", вы подтверждаете, что достигли совершеннолетия.',
      ageGateEnter: 'Войти',
      ageGateLeave: 'Выйти',
      navHome: 'Главная',
      navAbout: 'О нас',
      navEscort: 'Модели',
      navApartments: 'Апартаменты',
      navContact: 'Контакты',
      signIn: 'Войти',
      signUp: 'Регистрация',
      browse: 'Каталог',
      allModels: 'Все модели',
      newFaces: 'Новые лица',
      onlineNow: 'Сейчас онлайн',
      cities: 'Города',
      info: 'Инфо',
      postAd: 'Разместить анкету',
      account: 'Аккаунт',
      footerTagline: 'Платформа с проверенными моделями, ориентированная на приватность, стильный дизайн и прямой контакт.',
      disclaimer: 'Этот сайт содержит контент 18+ и использует демо-данные только в презентационных целях.',
      copy: '(c) 2026 EliteConnect. Все права защищены.',
      selectCity: 'Выберите город',
      ageRange: 'Возраст',
      anyAge: 'Любой возраст',
      category: 'Категория',
      anyCategory: 'Любая категория',
      search: 'Поиск',
      popular: 'Популярное:',
      all: 'Все',
      new: 'Новые',
      verified: 'Проверенные',
      openMenu: 'Открыть меню',
      gridView: 'Сетка',
      listView: 'Список'
    },
    home: {
      heroBadge: 'Проверенные премиум модели',
      heroTitleHtml: 'Найдите элитных моделей<br/><span class="hero__title--accent">в Дубае</span>',
      heroSubtitle: 'Просматривайте премиальные анкеты, проверенных моделей и приватные апартаменты в крупнейших городах.',
      tagNewToday: 'Сегодня новые',
      statActiveModels: 'Активные модели',
      statCitiesCovered: 'Охвачено городов',
      statVerifiedAds: 'Проверенные анкеты',
      statSupport: 'Поддержка',
      sectionCitiesTitle: 'Поиск по городу',
      sectionCitiesSub: 'Откройте для себя моделей и апартаменты в ключевых локациях региона.',
      howTitle: 'Как это работает',
      howSub: 'Простой путь от поиска до контакта.',
      step1Title: 'Смотрите модели',
      step1Text: 'Фильтруйте по городу, возрасту и категории. Каждая карточка ведет на рабочую страницу модели.',
      step2Title: 'Свяжитесь напрямую',
      step2Text: 'Откройте профиль, изучите детали, выберите тариф и отправьте сообщение со страницы контакта.',
      step3Title: 'Бронируйте уверенно',
      step3Text: 'Используйте избранное, фильтры по городам и приватные апартаменты для подходящего сценария.',
      ctaTitle: 'Хотите разместить анкету?',
      ctaText: 'Присоединяйтесь к проверенным моделям, получайте приоритетное размещение и управляйте запросами из одной премиальной витрины.',
      ctaPrimary: 'Разместить анкету',
      ctaSecondary: 'Подробнее'
    },
    escort: {
      pageTitle: 'Каталог моделей',
      pageSub: 'Фильтруйте по городу, возрасту, категории и ключевым словам. Каждая карточка открывает рабочий профиль модели.',
      queryPlaceholder: 'Поиск по имени, городу или тегу',
      emptyTitle: 'Модели не найдены',
      emptyText: 'Попробуйте другой город или уберите часть фильтров.'
    },
    about: {
      pageTitle: 'Наше агентство и правила',
      pageSub: 'Мы специализируемся на предоставлении эксклюзивных companionship-услуг с самыми красивыми, образованными и обаятельными моделями. Ваш комфорт, приватность и удовлетворенность для нас в приоритете.',
      reasonsTitle: 'Почему выбирают нас?',
      feature1Title: 'Полная конфиденциальность',
      feature1Text: 'Ваша приватность для нас на первом месте. Все общение и личные данные обрабатываются с максимальной осторожностью и полной конфиденциальностью.',
      feature2Title: 'Проверенные анкеты',
      feature2Text: 'Все фотографии на 100% реальные и регулярно обновляются. Вы видите именно то, что получите, без неприятных сюрпризов.',
      feature3Title: 'Профессиональный подход',
      feature3Text: 'Мы работаем только с надежными и ответственными моделями, которые сочетают красоту, интеллект и приятное общение.',
      feature4Title: 'Гибкие условия',
      feature4Text: 'Встреча в апартаментах, в отеле или сопровождение в поездке - мы подстраиваемся под ваши пожелания и формат.'
    },
    apartmentsPage: {
      pageTitle: 'Приватные апартаменты',
      pageSub: 'Чистые и приватные пространства для личных встреч в основных городах.'
    },
    contact: {
      pageTitle: 'Контакты',
      pageSub: 'Отправьте прямой запрос, уточните по апартаментам или обсудите публикацию анкеты.',
      card1Title: 'Быстрый ответ',
      card1Text: 'Используйте форму ниже, чтобы связаться с выбранной моделью или командой платформы.',
      card2Title: 'Приватная обработка',
      card2Text: 'Запросы обрабатываются конфиденциально и позже могут быть направлены в реальную CRM или админ-панель.',
      formTitle: 'Отправить сообщение',
      formSub: 'Эта демо-версия не хранит реальные данные. Отправка показывает завершенный пользовательский сценарий.',
      nameLabel: 'Ваше имя',
      namePlaceholder: 'Введите ваше имя',
      emailLabel: 'Email',
      profileLabel: 'Модель',
      cityLabel: 'Город',
      messageLabel: 'Сообщение',
      messagePlaceholder: 'Расскажите, что вам нужно',
      submit: 'Отправить сообщение',
      selectModel: 'Выберите модель'
    },
    signin: {
      pageTitle: 'Вход',
      pageSub: 'Демо-доступ для рекламодателей, ассистентов и модераторов.',
      formTitle: 'С возвращением',
      formSub: 'Это демонстрационный фронтенд-сценарий. Реальную авторизацию можно подключить позже.',
      emailLabel: 'Email',
      passwordLabel: 'Пароль',
      passwordPlaceholder: 'Введите пароль',
      submit: 'Войти'
    },
    signup: {
      pageTitle: 'Создать аккаунт',
      pageSub: 'Зарегистрируйте новый профиль или запросите приоритетное размещение в каталоге.',
      card1Title: 'Создайте профиль',
      card1Text: 'Добавьте контакты, город, галерею и описание в одной форме онбординга.',
      card2Title: 'Ожидайте модерацию',
      card2Text: 'В продакшн-версии анкета отправлялась бы на модерацию перед публикацией в каталоге.',
      formTitle: 'Заявка на регистрацию',
      formSub: 'Эта демо-версия собирает данные анкеты и завершает фронтенд-сценарий.',
      displayNameLabel: 'Отображаемое имя',
      displayNamePlaceholder: 'Имя профиля или компании',
      emailLabel: 'Email',
      cityLabel: 'Город',
      accountTypeLabel: 'Тип аккаунта',
      descriptionLabel: 'Краткое описание',
      descriptionPlaceholder: 'Расскажите о вашей анкете',
      submit: 'Создать аккаунт'
    },
    profilePage: {
      breadcrumbCatalog: 'Модели',
      from: 'От:',
      availability: 'График:',
      languages: 'Языки:',
      age: 'Возраст',
      height: 'Рост',
      weight: 'Вес',
      bust: 'Бюст',
      aboutMe: 'О себе',
      services: 'Услуги',
      rates: 'Тарифы',
      callNow: 'Позвонить',
      message: 'Написать',
      related: 'Похожие модели'
    },
    dynamic: {
      noModelsFound: 'Модели не найдены',
      showingModels: 'Показано {{visible}} из {{total}} моделей',
      loadMoreModels: 'Показать еще модели',
      allModelsLoaded: 'Все модели загружены',
      cityCount: '{{count}} моделей',
      messageButton: 'Написать',
      viewProfile: 'Смотреть профиль',
      openProfileAria: 'Открыть профиль {{name}}',
      saveModelAria: 'Сохранить {{name}}',
      galleryImageAlt: 'Изображение галереи {{index}}',
      mainPhotoAlt: 'Главное фото {{name}}',
      contactStatus: 'Сообщение отправлено. Мы скоро свяжемся с вами по поводу {{target}}.',
      contactTarget: '{{name}} в {{city}}',
      team: 'команды',
      signInStatus: 'Демо-вход выполнен. Теперь можно подключить реальную авторизацию.',
      signUpStatus: 'Заявка на регистрацию отправлена. Менеджер может проверить детали анкеты.',
      onRequest: 'По запросу',
      perHourSuffix: ' / час',
      dailyPrefix: 'Ежедневно'
    },
    badges: {
      vip: 'VIP',
      new: 'NEW',
      online: 'Онлайн',
      verified: 'Проверена'
    },
    accountTypes: {
      independent: 'Независимый профиль',
      agency: 'Агентство',
      apartments: 'Владелец апартаментов'
    }
  };

  Object.assign(I18N.RU.titles, {
    escort: 'Эскорт анкеты | EliteConnect'
  });

  Object.assign(I18N.RU.common, {
    navEscort: 'Эскорт',
    allCities: 'Все города',
    min: 'Мин',
    max: 'Макс',
    reset: 'Сбросить',
    apply: 'Применить'
  });

  Object.assign(I18N.RU.escort, {
    pageTitle: 'Эскорт анкеты',
    pageSub: 'Здесь вы найдете список наших красивых escort-анкет по ОАЭ.',
    cityLabel: 'Город',
    ageLabel: 'Возраст',
    heightLabel: 'Рост (см)',
    weightLabel: 'Вес (кг)',
    bustLabel: 'Размер груди',
    bustPlaceholder: 'B, C, D',
    emptyTitle: 'Эскорт анкеты не найдены',
    emptyText: 'Попробуйте другой город или расширьте фильтры.'
  });

  Object.assign(I18N.RU.dynamic, {
    noModelsFound: 'Профили не найдены',
    showingModels: 'Показано {{visible}} из {{total}} профилей',
    loadMoreModels: 'Показать еще профили',
    allModelsLoaded: 'Все профили загружены',
    cityCount: '{{count}} профилей',
    moreDetails: 'Подробнее',
    bookNow: 'Book',
    yearsUnit: 'years'
  });

  const CITY_LABELS = {
    EN: { Dubai: 'Dubai', 'Abu Dhabi': 'Abu Dhabi', Sharjah: 'Sharjah', Ajman: 'Ajman', 'Ras Al Khaimah': 'Ras Al Khaimah', Fujairah: 'Fujairah' },
    AR: { Dubai: 'دبي', 'Abu Dhabi': 'أبو ظبي', Sharjah: 'الشارقة', Ajman: 'عجمان', 'Ras Al Khaimah': 'رأس الخيمة', Fujairah: 'الفجيرة' },
    RU: { Dubai: 'Дубай', 'Abu Dhabi': 'Абу-Даби', Sharjah: 'Шарджа', Ajman: 'Аджман', 'Ras Al Khaimah': 'Рас-эль-Хайма', Fujairah: 'Фуджейра' }
  };

  function resolvePath(source, path) {
    return path.split('.').reduce((value, part) => (value ? value[part] : undefined), source);
  }

  function interpolate(template, variables = {}) {
    return String(template).replace(/\{\{(.*?)\}\}/g, (_, key) => String(variables[key.trim()] ?? ''));
  }

  function normalizeLanguageCode(language) {
    const normalized = String(language || '').toUpperCase();
    return LANGUAGE_CONFIG[normalized] ? normalized : DEFAULT_LANGUAGE;
  }

  let currentLanguage = DEFAULT_LANGUAGE;
  try {
    currentLanguage = normalizeLanguageCode(localStorage.getItem(STORAGE_KEY_LANGUAGE));
  } catch (error) {
    currentLanguage = DEFAULT_LANGUAGE;
  }

  function getCurrentLanguage() {
    return currentLanguage;
  }

  function setCurrentLanguage(language) {
    currentLanguage = normalizeLanguageCode(language);
    try {
      localStorage.setItem(STORAGE_KEY_LANGUAGE, currentLanguage);
    } catch (error) {
      // Ignore storage failures.
    }
    return currentLanguage;
  }

  function t(key, variables = {}, fallback = '') {
    const languagePack = I18N[getCurrentLanguage()] || I18N[DEFAULT_LANGUAGE];
    const value = resolvePath(languagePack, key) ?? resolvePath(I18N[DEFAULT_LANGUAGE], key) ?? fallback ?? key;
    return typeof value === 'string' ? interpolate(value, variables) : value;
  }

  function localizeCity(city) {
    return CITY_LABELS[getCurrentLanguage()]?.[city] ?? city;
  }

  function localizePrice(price) {
    const lang = getCurrentLanguage();
    const str = String(price || '');

    // Parse "AMOUNT CURRENCY [/ period]" — e.g. "200 USD / hour", "735 AED"
    const match = str.match(/^(\d+(?:[.,]\d+)?)\s*(USD|AED|RUB|PLN)(.*)/i);
    if (!match) {
      return str.replace(' / hour', t('dynamic.perHourSuffix'));
    }

    const amount = parseFloat(match[1].replace(',', '.'));
    const srcCurrency = match[2].toUpperCase();
    const hasSuffix = match[3].trim() !== '';

    // Convert any source currency → USD first
    const toUsd = { USD: 1, AED: 1 / 3.67, RUB: 1 / 92, PLN: 1 / 4.05 };
    const usdAmount = amount * (toUsd[srcCurrency] || 1);

    // Target currency per language
    const targets = {
      EN: { rate: 1,    symbol: '$',    before: true  },
      AR: { rate: 3.67, symbol: 'AED',  before: false },
      RU: { rate: 92,   symbol: '₽',   before: false }
    };
    const target = targets[lang] || targets.EN;
    const converted = Math.round(usdAmount * target.rate);

    // Format number with locale-aware thousands separator
    const locales = { EN: 'en-US', AR: 'ar-SA', RU: 'ru-RU' };
    const formatted = converted.toLocaleString(locales[lang] || 'en-US');

    const priceStr = target.before
      ? `${target.symbol}${formatted}`
      : `${formatted} ${target.symbol}`;

    return hasSuffix ? `${priceStr}${t('dynamic.perHourSuffix')}` : priceStr;
  }

  function formatLocation(city, district) {
    return district ? `${localizeCity(city)} / ${district}` : localizeCity(city);
  }

  function applyDocumentLanguageState() {
    const config = LANGUAGE_CONFIG[getCurrentLanguage()] || LANGUAGE_CONFIG[DEFAULT_LANGUAGE];
    document.documentElement.lang = config.locale;
    document.documentElement.dir = config.dir;
  }

  function setText(selector, value, context = document) {
    const element = typeof selector === 'string' ? context.querySelector(selector) : selector;
    if (element) element.textContent = value;
  }

  function setHTML(selector, value, context = document) {
    const element = typeof selector === 'string' ? context.querySelector(selector) : selector;
    if (element) element.innerHTML = value;
  }

  function setPlaceholder(selector, value, context = document) {
    const element = typeof selector === 'string' ? context.querySelector(selector) : selector;
    if (element) element.placeholder = value;
  }

  function setAriaLabel(selector, value, context = document) {
    const element = typeof selector === 'string' ? context.querySelector(selector) : selector;
    if (element) element.setAttribute('aria-label', value);
  }

  function localizeCitySelect(select, placeholderText) {
    if (!select) return;
    Array.from(select.options).forEach((option) => {
      option.textContent = option.value ? localizeCity(option.value) : placeholderText;
    });
  }

  function localizeCategorySelect(select, placeholderText) {
    if (!select) return;

    const labels = {
      vip: t('badges.vip'),
      new: t('badges.new'),
      verified: t('badges.verified'),
      online: t('common.onlineNow')
    };

    Array.from(select.options).forEach((option) => {
      option.textContent = option.value ? labels[option.value] || option.textContent : placeholderText;
    });
  }

  function applyFooterTranslations() {
    const footerColumns = Array.from(document.querySelectorAll('.footer__col'));
    if (footerColumns.length < 4) return;

    const [browseColumn, citiesColumn, infoColumn, accountColumn] = footerColumns;

    setText(browseColumn.querySelector('.footer__col-title'), t('common.browse'));
    Array.from(browseColumn.querySelectorAll('a')).forEach((link, index) => {
      const labels = [t('common.allModels'), t('badges.vip'), t('common.newFaces'), t('common.onlineNow')];
      if (labels[index]) link.textContent = labels[index];
    });

    setText(citiesColumn.querySelector('.footer__col-title'), t('common.cities'));
    Array.from(citiesColumn.querySelectorAll('a')).forEach((link) => {
      link.textContent = localizeCity(link.textContent.trim());
    });

    setText(infoColumn.querySelector('.footer__col-title'), t('common.info'));
    Array.from(infoColumn.querySelectorAll('a')).forEach((link, index) => {
      const labels = [t('common.navAbout'), t('common.navApartments'), t('common.navContact'), t('common.postAd')];
      if (labels[index]) link.textContent = labels[index];
    });

    setText(accountColumn.querySelector('.footer__col-title'), t('common.account'));
    Array.from(accountColumn.querySelectorAll('a')).forEach((link, index) => {
      const labels = [t('common.signIn'), t('common.signUp')];
      if (labels[index]) link.textContent = labels[index];
    });
  }

  function applyCommonTranslations() {
    applyDocumentLanguageState();

    const page = document.body?.dataset.page || 'home';
    const currentName = document.getElementById('breadcrumb-name')?.textContent?.trim();
    document.title = page === 'profile' && currentName ? t('titles.profileWithName', { name: currentName }) : t(`titles.${page}`);

    setText('.age-gate__title', t('common.ageGateTitle'));
    setText('.age-gate__text', t('common.ageGateText'));
    setText('#age-gate-yes', t('common.ageGateEnter'));
    setText('#age-gate-no', t('common.ageGateLeave'));

    const currentLanguageElement = document.getElementById('current-lang');
    if (currentLanguageElement) currentLanguageElement.textContent = getCurrentLanguage();

    const dropdown = document.getElementById('lang-dropdown');
    if (dropdown) {
      dropdown.innerHTML = Object.values(LANGUAGE_CONFIG)
        .map((language) => `<li><button data-lang="${language.code}" type="button">${language.label}</button></li>`)
        .join('');
    }

    const navLabels = [t('common.navHome'), t('common.navAbout'), t('common.navEscort'), t('common.navApartments'), t('common.navContact')];
    Array.from(document.querySelectorAll('[data-nav]')).forEach((link, index) => {
      if (navLabels[index]) link.textContent = navLabels[index];
    });

    Array.from(document.querySelectorAll('.mobile-drawer__link')).forEach((link, index) => {
      if (navLabels[index]) link.textContent = navLabels[index];
    });

    setText('.header__signin', t('common.signIn'));
    setText('.header__controls .btn--primary.btn--sm', t('common.signUp'));
    setText('.mobile-drawer .btn--primary.btn--full', t('common.signUp'));
    setAriaLabel('#burger', t('common.openMenu'));
    setAriaLabel('#grid-view', t('common.gridView'));
    setAriaLabel('#list-view', t('common.listView'));
    setText('.footer__tagline', t('common.footerTagline'));
    setText('.footer__disclaimer', t('common.disclaimer'));
    setText('.footer__copy', t('common.copy'));
    applyFooterTranslations();
  }

  function applyHomeTranslations() {
    setText('.hero__badge', t('home.heroBadge'));
    setHTML('.hero__title', t('home.heroTitleHtml'));
    setText('.hero__subtitle', t('home.heroSubtitle'));
    localizeCitySelect(document.getElementById('home-city-select'), t('common.selectCity'));
    setText('#home-age-select option[value=""]', t('common.ageRange'));
    localizeCategorySelect(document.getElementById('home-category-select'), t('common.category'));
    setText('#home-search-btn', t('common.search'));
    setText('.hero__tag-label', t('common.popular'));

    const tags = Array.from(document.querySelectorAll('.tag'));
    if (tags[0]) tags[0].textContent = localizeCity('Dubai');
    if (tags[1]) tags[1].textContent = localizeCity('Abu Dhabi');
    if (tags[2]) tags[2].textContent = t('badges.vip');
    if (tags[3]) tags[3].textContent = t('home.tagNewToday');
    if (tags[4]) tags[4].textContent = t('common.onlineNow');

    const stats = Array.from(document.querySelectorAll('.stat__label'));
    const statLabels = [t('home.statActiveModels'), t('home.statCitiesCovered'), t('home.statVerifiedAds'), t('home.statSupport')];
    stats.forEach((label, index) => {
      if (statLabels[index]) label.textContent = statLabels[index];
    });

    const filterLabels = [t('common.all'), t('common.new'), t('badges.vip'), t('common.onlineNow'), t('common.verified')];
    Array.from(document.querySelectorAll('.filter-chip')).forEach((chip, index) => {
      if (filterLabels[index]) chip.textContent = filterLabels[index];
    });

    setText('.cities-section .section-title', t('home.sectionCitiesTitle'));
    setText('.cities-section .section-subtitle', t('home.sectionCitiesSub'));
    Array.from(document.querySelectorAll('.city-card')).forEach((card) => {
      const city = new URL(card.getAttribute('href'), window.location.href).searchParams.get('city') || '';
      const countElement = card.querySelector('.city-card__count');
      const count = countElement?.textContent.match(/\d+/)?.[0] || '';
      setText(card.querySelector('.city-card__name'), localizeCity(city));
      if (countElement) countElement.textContent = t('dynamic.cityCount', { count });
    });

    setText('.how-section .section-title', t('home.howTitle'));
    setText('.how-section .section-subtitle', t('home.howSub'));
    Array.from(document.querySelectorAll('.step-card')).forEach((card, index) => {
      const titles = [t('home.step1Title'), t('home.step2Title'), t('home.step3Title')];
      const texts = [t('home.step1Text'), t('home.step2Text'), t('home.step3Text')];
      setText(card.querySelector('.step-card__title'), titles[index]);
      setText(card.querySelector('.step-card__text'), texts[index]);
    });

    setText('.cta-section .cta-banner__title', t('home.ctaTitle'));
    setText('.cta-section .cta-banner__text', t('home.ctaText'));
    const ctaButtons = Array.from(document.querySelectorAll('.cta-section .cta-banner__actions a'));
    if (ctaButtons[0]) ctaButtons[0].textContent = t('home.ctaPrimary');
    if (ctaButtons[1]) ctaButtons[1].textContent = t('home.ctaSecondary');
  }

  function applyEscortTranslations() {
    setText('.escort-hero__title', t('escort.pageTitle'));
    setText('.escort-hero__sub', t('escort.pageSub'));
    setText('label[for="escort-city-select"]', t('escort.cityLabel'));
    setText('label[for="escort-age-min"]', t('escort.ageLabel'));
    setText('label[for="escort-height-min"]', t('escort.heightLabel'));
    setText('label[for="escort-weight-min"]', t('escort.weightLabel'));
    setText('label[for="escort-bust"]', t('escort.bustLabel'));
    localizeCitySelect(document.getElementById('escort-city-select'), t('common.allCities'));
    setPlaceholder('#escort-age-min', t('common.min'));
    setPlaceholder('#escort-age-max', t('common.max'));
    setPlaceholder('#escort-height-min', t('common.min'));
    setPlaceholder('#escort-height-max', t('common.max'));
    setPlaceholder('#escort-weight-min', t('common.min'));
    setPlaceholder('#escort-weight-max', t('common.max'));
    setPlaceholder('#escort-bust', t('escort.bustPlaceholder'));
    setText('#escort-reset', t('common.reset'));
    setText('#escort-search-form button[type="submit"]', t('common.apply'));

    const filterLabels = [t('common.all'), t('common.new'), t('badges.vip'), t('common.onlineNow'), t('common.verified')];
    Array.from(document.querySelectorAll('.filter-chip')).forEach((chip, index) => {
      if (filterLabels[index]) chip.textContent = filterLabels[index];
    });

    setText('#escort-empty .empty-state__title', t('escort.emptyTitle'));
    setText('#escort-empty .empty-state__text', t('escort.emptyText'));
  }

  function applyAboutTranslations() {
    setText('.about-page__title', t('about.pageTitle'));
    setText('.about-page__lead', t('about.pageSub'));
    setText('.about-page__section-title', t('about.reasonsTitle'));

    const features = Array.from(document.querySelectorAll('.about-feature'));
    const titles = [t('about.feature1Title'), t('about.feature2Title'), t('about.feature3Title'), t('about.feature4Title')];
    const texts = [t('about.feature1Text'), t('about.feature2Text'), t('about.feature3Text'), t('about.feature4Text')];
    features.forEach((feature, index) => {
      setText(feature.querySelector('.about-feature__title'), titles[index]);
      setText(feature.querySelector('.about-feature__text'), texts[index]);
    });
  }

  function applyApartmentsTranslations() {
    setText('.page-hero__title', t('apartmentsPage.pageTitle'));
    setText('.page-hero__sub', t('apartmentsPage.pageSub'));
  }

  function applyContactTranslations() {
    setText('.page-hero__title', t('contact.pageTitle'));
    setText('.page-hero__sub', t('contact.pageSub'));

    const cards = Array.from(document.querySelectorAll('.content-card'));
    if (cards[0]) {
      setText(cards[0].querySelector('.content-card__title'), t('contact.card1Title'));
      setText(cards[0].querySelector('.content-card__text'), t('contact.card1Text'));
    }
    if (cards[1]) {
      setText(cards[1].querySelector('.content-card__title'), t('contact.card2Title'));
      setText(cards[1].querySelector('.content-card__text'), t('contact.card2Text'));
    }

    setText('.contact-form__title', t('contact.formTitle'));
    setText('.contact-form__sub', t('contact.formSub'));
    setText('label[for="contact-name"]', t('contact.nameLabel'));
    setPlaceholder('#contact-name', t('contact.namePlaceholder'));
    setText('label[for="contact-email"]', t('contact.emailLabel'));
    setText('label[for="contact-profile"]', t('contact.profileLabel'));
    setText('label[for="contact-city"]', t('contact.cityLabel'));
    localizeCitySelect(document.getElementById('contact-city'), t('common.selectCity'));
    setText('label[for="contact-message"]', t('contact.messageLabel'));
    setPlaceholder('#contact-message', t('contact.messagePlaceholder'));
    setText('#contact-form .btn--primary', t('contact.submit'));
  }

  function applySigninTranslations() {
    setText('.page-hero__title', t('signin.pageTitle'));
    setText('.page-hero__sub', t('signin.pageSub'));
    setText('.contact-form__title', t('signin.formTitle'));
    setText('.contact-form__sub', t('signin.formSub'));
    setText('label[for="signin-email"]', t('signin.emailLabel'));
    setText('label[for="signin-password"]', t('signin.passwordLabel'));
    setPlaceholder('#signin-password', t('signin.passwordPlaceholder'));
    setText('#signin-form .btn--primary', t('signin.submit'));
  }

  function applySignupTranslations() {
    setText('.page-hero__title', t('signup.pageTitle'));
    setText('.page-hero__sub', t('signup.pageSub'));

    const cards = Array.from(document.querySelectorAll('.content-card'));
    if (cards[0]) {
      setText(cards[0].querySelector('.content-card__title'), t('signup.card1Title'));
      setText(cards[0].querySelector('.content-card__text'), t('signup.card1Text'));
    }
    if (cards[1]) {
      setText(cards[1].querySelector('.content-card__title'), t('signup.card2Title'));
      setText(cards[1].querySelector('.content-card__text'), t('signup.card2Text'));
    }

    setText('.contact-form__title', t('signup.formTitle'));
    setText('.contact-form__sub', t('signup.formSub'));
    setText('label[for="signup-name"]', t('signup.displayNameLabel'));
    setPlaceholder('#signup-name', t('signup.displayNamePlaceholder'));
    setText('label[for="signup-email"]', t('signup.emailLabel'));
    setText('label[for="signup-city"]', t('signup.cityLabel'));
    localizeCitySelect(document.getElementById('signup-city'), t('common.selectCity'));
    setText('label[for="signup-type"]', t('signup.accountTypeLabel'));

    const typeSelect = document.getElementById('signup-type');
    if (typeSelect) {
      Array.from(typeSelect.options).forEach((option) => {
        if (!option.value) return;
        option.textContent = t(`accountTypes.${option.value}`, {}, option.textContent);
      });
    }

    setText('label[for="signup-about"]', t('signup.descriptionLabel'));
    setPlaceholder('#signup-about', t('signup.descriptionPlaceholder'));
    setText('#signup-form .btn--primary', t('signup.submit'));
  }

  function applyProfileTranslations() {
    const breadcrumbLinks = Array.from(document.querySelectorAll('.breadcrumb-bar__link'));
    if (breadcrumbLinks[0]) breadcrumbLinks[0].textContent = t('common.navHome');
    if (breadcrumbLinks[1]) breadcrumbLinks[1].textContent = t('profilePage.breadcrumbCatalog');

    const noteLabels = Array.from(document.querySelectorAll('.profile-note strong'));
    const noteTexts = [t('profilePage.from'), t('profilePage.availability'), t('profilePage.languages')];
    noteLabels.forEach((label, index) => {
      if (noteTexts[index]) label.textContent = noteTexts[index];
    });

    const statLabels = Array.from(document.querySelectorAll('.profile-stat__label'));
    const statTexts = [t('profilePage.age'), t('profilePage.height'), t('profilePage.weight'), t('profilePage.bust')];
    statLabels.forEach((label, index) => {
      if (statTexts[index]) label.textContent = statTexts[index];
    });

    const sectionTitles = Array.from(document.querySelectorAll('.profile-section-title'));
    const sectionTexts = [t('profilePage.aboutMe'), t('profilePage.services'), t('profilePage.rates')];
    sectionTitles.forEach((label, index) => {
      if (sectionTexts[index]) label.textContent = sectionTexts[index];
    });

    setText('#call-now', t('profilePage.callNow'));
    setText('#message-now', t('profilePage.message'));
    setText('#related-section .section-title', t('profilePage.related'));
  }

  function applyTranslations() {
    applyCommonTranslations();

    switch (document.body?.dataset.page || 'home') {
      case 'home':
        applyHomeTranslations();
        break;
      case 'escort':
        applyEscortTranslations();
        break;
      case 'about':
        applyAboutTranslations();
        break;
      case 'apartments':
        applyApartmentsTranslations();
        break;
      case 'contact':
        applyContactTranslations();
        break;
      case 'signin':
        applySigninTranslations();
        break;
      case 'signup':
        applySignupTranslations();
        break;
      case 'profile':
        applyProfileTranslations();
        break;
      default:
        break;
    }
  }

  window.normalizeLanguageCode = normalizeLanguageCode;
  window.getCurrentLanguage = getCurrentLanguage;
  window.setCurrentLanguage = setCurrentLanguage;
  window.applyDocumentLanguageState = applyDocumentLanguageState;
  window.applyTranslations = applyTranslations;
  window.t = t;
  window.localizeCity = localizeCity;
  window.localizePrice = localizePrice;
  window.formatLocation = formatLocation;
  window.getBadgeLabel = (badge, fallback = badge) => t(`badges.${badge}`, {}, fallback);
  window.__escortI18nBase = { STORAGE_KEY_LANGUAGE, DEFAULT_LANGUAGE, LANGUAGE_CONFIG, I18N, version: 2 };
})();
