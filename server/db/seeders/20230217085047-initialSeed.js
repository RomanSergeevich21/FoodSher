const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashpassUser = await bcrypt.hash('1', 10);
    const hashpassAdmin = await bcrypt.hash('2', 10);
    const hashpassPartner = await bcrypt.hash('3', 10);
    const hashpassModer = await bcrypt.hash('4', 10);
    const hashpassPartner2 = await bcrypt.hash('5', 10);

    const hashpassDen = await bcrypt.hash('6', 10);
    const hashpassElbrusRoma = await bcrypt.hash('7', 10);
    const hashpassAlik = await bcrypt.hash('8', 10);

    const hashpassUser9 = await bcrypt.hash('9', 10);
    const hashpassUser10 = await bcrypt.hash('10', 10);
    const hashpassUser11 = await bcrypt.hash('11', 10);
    const hashpassUser12 = await bcrypt.hash('12', 10);
    const hashpassUser13 = await bcrypt.hash('13', 10);
    const hashpassUser14 = await bcrypt.hash('14', 10);
    const hashpassVictoria = await bcrypt.hash('15', 10);

    await queryInterface.bulkInsert(
      'Roles',
      [
        {
          rolename: 'user',
        },
        {
          rolename: 'admin',
        },
        {
          rolename: 'partner',
        },
        {
          rolename: 'moderator',
        },
      ],
      {},
    );
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          title: 'Мясо',
          photoPath:
            'https://avatars.mds.yandex.net/i?id=15fbc5c393059d0887944886d01bde2d31f0f73b-8209530-images-thumbs&n=13&exp=1',
        },
        {
          title: 'Рыба',
          photoPath:
            'https://avatars.mds.yandex.net/i?id=054ae5cb21c8746f7f4955ff93dd6ecd-4292273-images-thumbs&n=13&exp=1',
        },
        {
          title: 'Морепродукты',
          photoPath:
            'https://avatars.mds.yandex.net/i?id=7a7248f97664dd82e80c33b9dfa2de63-5221515-images-thumbs&n=13&exp=1',
        },
        {
          title: 'Яйца',
          photoPath:
            'https://avatars.mds.yandex.net/i?id=488fb560a1f6dfcee980535198d35928-4960217-images-thumbs&n=13&exp=1',
        },
        {
          title: 'Молоко',
          photoPath:
            'https://avatars.mds.yandex.net/i?id=15fbc5c393059d0887944886d01bde2d31f0f73b-8209530-images-thumbs&n=13&exp=1',
        },
        {
          title: 'Соя',
          photoPath:
            'https://avatars.mds.yandex.net/i?id=15fbc5c393059d0887944886d01bde2d31f0f73b-8209530-images-thumbs&n=13&exp=1',
        },
        {
          title: 'Зелень',
          photoPath:
            'https://avatars.mds.yandex.net/i?id=15fbc5c393059d0887944886d01bde2d31f0f73b-8209530-images-thumbs&n=13&exp=1',
        },
        {
          title: 'Фрукты',
          photoPath:
            'https://avatars.mds.yandex.net/i?id=15fbc5c393059d0887944886d01bde2d31f0f73b-8209530-images-thumbs&n=13&exp=1',
        },
        {
          title: 'Грибы',
          photoPath:
            'https://avatars.mds.yandex.net/i?id=15fbc5c393059d0887944886d01bde2d31f0f73b-8209530-images-thumbs&n=13&exp=1',
        },
        {
          title: 'Жиры|Масла',
          photoPath:
            'https://avatars.mds.yandex.net/i?id=15fbc5c393059d0887944886d01bde2d31f0f73b-8209530-images-thumbs&n=13&exp=1',
        },
        {
          title: 'Орехи|семена|крупы',
          photoPath:
            'https://avatars.mds.yandex.net/i?id=15fbc5c393059d0887944886d01bde2d31f0f73b-8209530-images-thumbs&n=13&exp=1',
        },
        {
          title: 'Мучное',
          photoPath:
            'https://avatars.mds.yandex.net/i?id=15fbc5c393059d0887944886d01bde2d31f0f73b-8209530-images-thumbs&n=13&exp=1',
        },
        {
          title: 'Сладости',
          photoPath:
            'https://avatars.mds.yandex.net/i?id=15fbc5c393059d0887944886d01bde2d31f0f73b-8209530-images-thumbs&n=13&exp=1',
        },
        {
          title: 'Фастфуд',
          photoPath:
            'https://avatars.mds.yandex.net/i?id=15fbc5c393059d0887944886d01bde2d31f0f73b-8209530-images-thumbs&n=13&exp=1',
        },
        {
          title: 'Напитки|соки',
          photoPath:
            'https://avatars.mds.yandex.net/i?id=15fbc5c393059d0887944886d01bde2d31f0f73b-8209530-images-thumbs&n=13&exp=1',
        },
        {
          title: 'Другое',
          photoPath:
            'https://avatars.mds.yandex.net/i?id=15fbc5c393059d0887944886d01bde2d31f0f73b-8209530-images-thumbs&n=13&exp=1',
        },
        {
          title: 'Салаты и закуски',
          photoPath:
            'https://avatars.mds.yandex.net/i?id=15fbc5c393059d0887944886d01bde2d31f0f73b-8209530-images-thumbs&n=13&exp=1',
        },
      ],
      {},
    );
    await queryInterface.bulkInsert(
      'Statuses',
      [
        {
          title: 'processing',
        },
        {
          title: 'published',
        },
        {
          title: 'inactive',
        },
      ],
      {},
    );
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          email: '1@1',
          hashpass: hashpassUser,
          firstName: 'Никита',
          lastName: 'Басов',
          secondName: 'Дмитриевич',
          phone: '+79012324312',
          pathPhoto:
            'https://avatars.mds.yandex.net/i?id=5919bbf82c5cc8c65fef9d8ff06fc1e57f6d2f51-5303596-images-thumbs&n=13&exp=1',
          active: false,
          roleid: 1,
        },
        {
          email: '2@2',
          hashpass: hashpassAdmin,
          firstName: 'Елизавета',
          lastName: 'Иванова',
          secondName: 'Кирилловна',
          phone: '+79092567656',
          pathPhoto:
            'https://avatars.mds.yandex.net/i?id=da9227797632ac6eeacbf99de145c5f94fd0f544-8425275-images-thumbs&n=13&exp=1',
          active: false,
          roleid: 2,
        },
        {
          email: '3@3',
          hashpass: hashpassPartner,
          firstName: 'Степан',
          lastName: 'Тихонов',
          secondName: 'Дамирович',
          phone: '+79012324312',
          pathPhoto:
            'https://avatars.mds.yandex.net/i?id=0e294470b0599b048bd9dbb6569a4ad6e808f19d-8206800-images-thumbs&n=13&exp=1',
          alternativePhone: '+79013245678',
          companyName: 'ВкусВилл',
          titleLogoPath:
            'https://img.artlebedev.ru/everything/vkusvill/store/process/vkusvill-store-process-21.jpg',
          active: true,
          description:
            'Российская розничная сеть супермаркетов и собственная торговая марка продуктов, позиционируемых как «продукты для здорового питания»',
          roleid: 3,
        },
        {
          email: '5@5',
          hashpass: hashpassPartner2,
          firstName: 'Антон',
          lastName: 'Балашов',
          secondName: 'Александрович',
          phone: '+79012324312',
          pathPhoto:
            'https://avatars.mds.yandex.net/i?id=55dfbbf4e0b932c8eed195a403a74ea3fcd2962e-8497168-images-thumbs&n=13&exp=1',
          alternativePhone: '+79013245678',
          companyName: 'Перекресток',
          titleLogoPath: 'https://www.mikhaylovsky.com/wp-content/gallery/2018-06-04/08.jpg',
          active: true,
          description:
            'Концепция специализированных магазинов с заводским отделом Колбасы и Деликатесы, который дополняют отделы: Охлажденное мясо и Мясные полуфабрикаты, Молоко, Замороженные полуфабрикаты, Кондитерские изделия и Пекарня пользуется растущим спросом среди покупателей, не конкурирует с федеральными сетями, а дополняет их ассортимент.',
          roleid: 3,
        },
        {
          email: '4@4',
          hashpass: hashpassModer,
          firstName: 'Анастасия',
          lastName: 'Попова',
          secondName: 'Артемьевна',
          phone: '+79297865191',
          pathPhoto:
            'https://avatars.mds.yandex.net/i?id=c59299dd609e783d1a0b10071059a74014fb99ec-8174408-images-thumbs&n=13&exp=1',
          alternativePhone: '+79013245678',
          active: false,
          roleid: 4,
        },
        {
          email: 'den@gmail.com',
          hashpass: hashpassDen,
          firstName: 'Денис',
          lastName: 'Петров',
          secondName: 'Евгеньевич',
          phone: '+7929786345',
          pathPhoto: 'http://localhost:3000/image/Four.jpeg',
          alternativePhone: '+79013245678',
          active: false,
          roleid: 1,
        },
        {
          email: 'elbrus.shop@gmail.com',
          hashpass: hashpassElbrusRoma,
          firstName: 'Роман',
          lastName: 'Эльбрусов',
          secondName: 'Эльбрусович',
          phone: '+79012323456',
          pathPhoto: 'https://ca.slack-edge.com/T03HY1ND24T-U04CE42VDAL-0dd00b61a59f-512',
          alternativePhone: '+79013245678',
          companyName: 'Эльбрус shop',
          titleLogoPath: 'https://jigidi-images.s3.amazonaws.com/puzzles/WGGOE19VR05DR4MW.jpg',
          active: true,
          description:
            'Свежие продукты для IT-шников и не только. Каждый день радуем Вас выпечкой, овощами, кондитеркой, борщами.  Сделай get-запрос на наши полки и мы запушим в тебя витамины и минералы',
          roleid: 3,
        },
        {
          email: 'alik.shop@gmail.com',
          hashpass: hashpassAlik,
          firstName: 'Андрей',
          lastName: 'Соколов',
          secondName: 'Артёмович',
          phone: '+79012323456',
          pathPhoto:
            'https://avatars.mds.yandex.net/i?id=ed2e4ab3933ee8b1f471649ea4d4dd845253c9ce-5023294-images-thumbs&n=13',
          alternativePhone: '+79014565678',
          companyName: 'Алик',
          titleLogoPath:
            'https://avatars.mds.yandex.net/get-altay/214458/2a000001628b218f46ea978707009da0a72a/XXL',
          active: true,
          description:
            'Интернет магазин Алик предлагает к вашему столу свежие фрукты, овощи, ягоды, грибы и зелень недорого в широчайшем ассортименте. Продажа овощей и фруктов в Москве — это основное направление деятельности нашей компании. ',
          roleid: 3,
        },

        {
          email: '9@9',
          hashpass: hashpassUser9,
          firstName: 'Юля',
          lastName: 'Тарасова',
          secondName: '',
          phone: '+7929786345',
          pathPhoto: 'https://ca.slack-edge.com/T03HY1ND24T-U03J55HG72A-d5497be835c8-512',
          alternativePhone: '+79013245678',
          active: false,
          roleid: 1,
        },
        {
          email: '10@10',
          hashpass: hashpassUser10,
          firstName: 'Мария',
          lastName: 'Поплавская',
          secondName: '',
          phone: '+7929786345',
          pathPhoto: 'https://ca.slack-edge.com/T03HY1ND24T-U03JK078RRP-04509aa23e09-512',
          alternativePhone: '+79013245678',
          active: false,
          roleid: 1,
        },
        {
          email: '11@11',
          hashpass: hashpassUser11,
          firstName: 'Юлия',
          lastName: 'Павлова',
          secondName: '',
          phone: '+7929786345',
          pathPhoto: 'https://ca.slack-edge.com/T03HY1ND24T-U046QBRR7AR-53db647f542c-512',
          alternativePhone: '+79013245678',
          active: false,
          roleid: 1,
        },
        {
          email: '12@12',
          hashpass: hashpassUser12,
          firstName: 'Адам',
          lastName: 'Балкоев',
          secondName: '',
          phone: '+7929786345',
          pathPhoto: 'https://ca.slack-edge.com/T03HY1ND24T-U03JR6J9BPS-efe3dbf83bf1-512',
          alternativePhone: '+79013245678',
          active: false,
          roleid: 1,
        },
        {
          email: '13@13',
          hashpass: hashpassUser13,
          firstName: 'Соня',
          lastName: 'Фидлер',
          secondName: '',
          phone: '+7929786345',
          pathPhoto: 'https://ca.slack-edge.com/T03HY1ND24T-U03J3FNUJKE-10ba709047c6-512',
          alternativePhone: '+79013245678',
          active: false,
          roleid: 1,
        },
        {
          email: '14@14',
          hashpass: hashpassUser14,
          firstName: 'Андрей',
          lastName: 'Власенко',
          secondName: '',
          phone: '+7929786345',
          pathPhoto: 'https://ca.slack-edge.com/T03HY1ND24T-U04FD6CPK9N-79064a05167a-512',
          alternativePhone: '+79013245678',
          active: false,
          roleid: 1,
        },
        {
          email: 'victoria.shop@gmail.com',
          hashpass: hashpassVictoria,
          firstName: 'Андрей',
          lastName: 'Соколов',
          secondName: 'Артёмович',
          phone: '+79012323456',
          pathPhoto:
            'https://avatars.mds.yandex.net/i?id=fd2c919c92496dc745b30c9a75c2dc5f6a7eba05-4298842-images-thumbs&n=13',
          alternativePhone: '+79014565678',
          companyName: 'Виктория',
          titleLogoPath:
            'https://img-fotki.yandex.ru/get/5902/vkrasnoznamenske-ru.1/0_591f4_89a0ddbc_orig.jpg',
          active: true,
          description:
            'Каждый день радовать наших покупателей отличным сервисом и по-настоящему вкусными и действительно свежими продуктами по справедливой цене.',
          roleid: 3,
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Comments',
      [
        {
          body: 'Тут продается только алкоголь и сигареты. Мне не подходит!',
          authorid: 14,
          userid: 7,
        },
        {
          body: 'Ваш паштет просто топ! Делюсь с соседями)',
          authorid: 11,
          userid: 7,
        },
        {
          body: 'Проведу вашему персоналу тренинг по командообразованию. Недорого. Тел.: +79013457854',
          authorid: 10,
          userid: 7,
        },
        {
          body: 'Кто по вечерам стал забирать мои бананы?!',
          authorid: 12,
          userid: 7,
        },
        {
          body: 'Продавец матерился при мне, прошу принять меры!',
          authorid: 13,
          userid: 7,
        },
        {
          body: 'вернусь из Германии, заеду к Вам за шампиньонами.',
          authorid: 9,
          userid: 7,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Categories', null, {});
    await queryInterface.bulkDelete('Statuses', null, {});
    await queryInterface.bulkDelete('Roles', null, {});
  },
};

// 9 Тарасова
// 10 Поплавская
// 11 Павлова
// 12 Балкоев
// 13 Фидлер
// 14 Власенко

// 7  "Эльбрус"
