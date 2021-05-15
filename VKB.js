//Добавляем константу VK в которой будут будут все методы из библиотеки vk-io
const {VK, Keyboard} = require('vk-io');
const fs = require('fs');
const settings = require('./Settings.json');
const base = require('./base.json');
//теперь применяем методу (константе) vk значение раннее созданного VK
const vk = new VK ( {
    //добавляем токен вк для работы с сообществом
    token: "46d623e29ef9a1ff2f8ca9e6d5814af1a039b2c4ff571d4f442a8c87056a9827e7f23e5d474b758f57ed9",
    // теперь указываем тип работы (принять - вернуть)
    apiMode: 'parallel',
    //ну а тут необязательная переменная, которая в разы ускоряет работу бота
    pollingGroupId: 192964126
});
let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}
app.listen(port);
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const GROUP_ID = 192964126;

const mentionPattern = new RegExp(
    String.raw`^(?:\[club${GROUP_ID}\|[^\]]+\])(?:[\s.,\'\"!?\-+]+|$)`,
    'i'
);

vk.updates.on('message', (context, next) => {
    if (context.text) {
        context.text = context.text.replace(mentionPattern, '');
    }

    return next();
});



vk.updates.on("message", async(context, next)=>{
    if(context.isGroup) return
    if(!context.chatId === 5) return
    if (!base.players[context.senderId]){
        base.players[context.senderId] = {
            "lvl": 1,
            "hp": 10,
            "dmg": 1,
            "money": 0,
            "liker": 2,
            "kills": 0,
            "XP": 0,
            "reff": false
        }
        context.send("@id" +context.senderId + "(ты) успешно зарегистрирован! Напиши 'клавиатура открыть' для более лёгкого освоения бота!")
    }
    await next();
});

setInterval(()=>{
    fs.writeFileSync("./base.json", JSON.stringify(base, null, "\r"))
}, 300)

//Если сообщение от пользователя = ↓ любыми буквами то:
vk.updates.hear(/^привет$/i, async (context) => {
    //закончить команду отправкой ↓
    return context.send('Приветствую!');
})

vk.updates.hear(/^ударить$/i, async (context) => {
    if (base.players[context.senderId].hp < 1) {
        return context.send("Оуч, у вас совсем нет хп! Но вы можете потратить немного денег на лечение")
    }
    base.players[context.senderId].liker -= base.players[context.senderId].dmg
    if(base.players[context.senderId].liker < 1){
        if(base.players[context.senderId].lvl === 1){
            randomiz = (Math.round( Math.random()*100))
            base.players[context.senderId].kills += 1
            base.players[context.senderId].liker = randomiz
            base.players[context.senderId].XP += 1
            base.players[context.senderId].money += 10
            if(base.players[context.senderId].XP === 10){
                base.players[context.senderId].lvl += 1
                base.players[context.senderId].XP -= 10
                context.send("Ваш уровень повысился!")
            }
            return context.send("Вы ударили лайкера и победили его! Вам зачислились 1xp и 10 монет!")
        }
        if(base.players[context.senderId].lvl === 2){
            randomiz = (Math.round( Math.random()*200))
            base.players[context.senderId].kills += 1
            base.players[context.senderId].liker = randomiz
            base.players[context.senderId].XP += 1
            base.players[context.senderId].money += 10
            if(base.players[context.senderId].XP === 10){
                base.players[context.senderId].lvl += 1
                base.players[context.senderId].XP -= 10
                context.send("Ваш уровень повысился!")
            }
            return context.send("Вы ударили лайкера и победили его! Вам зачислились 1xp и 10 монет!")
        }
        if(base.players[context.senderId].lvl === 3){
            randomiz = (Math.round( Math.random()*300))
            base.players[context.senderId].liker = randomiz
            base.players[context.senderId].XP += 1
            base.players[context.senderId].kills += 1
            base.players[context.senderId].money += 10
            if(base.players[context.senderId].XP === 10){
                base.players[context.senderId].lvl += 1
                base.players[context.senderId].XP -= 10
                context.send("Ваш уровень повысился!")
            }
            return context.send("Вы ударили лайкера и победили его! Вам зачислились 1xp и 10 монет!")
        }
        if(base.players[context.senderId].lvl === 4){
            randomiz = (Math.round( Math.random()*400))
            base.players[context.senderId].kills += 1
            base.players[context.senderId].liker = randomiz
            base.players[context.senderId].XP += 1
            base.players[context.senderId].money += 10
            if(base.players[context.senderId].XP === 10){
                base.players[context.senderId].lvl += 1
                base.players[context.senderId].XP -= 10
                context.send("Ваш уровень повысился!")
            }
            return context.send("Вы ударили лайкера и победили его! Вам зачислились 1xp и 10 монет!")
        }
        if(base.players[context.senderId].lvl === 5){
            randomiz = (Math.round( Math.random()*500))
            base.players[context.senderId].kills += 1
            base.players[context.senderId].liker = randomiz
            base.players[context.senderId].XP += 1
            base.players[context.senderId].money += 10
            if(base.players[context.senderId].XP === 10){
                base.players[context.senderId].lvl += 1
                base.players[context.senderId].XP -= 10
                context.send("Ваш уровень повысился!")
            }
            return context.send("Вы ударили лайкера и победили его! Вам зачислились 1xp и 10 монет!")
        }
        if(base.players[context.senderId].lvl === 6){
            randomiz = (Math.round( Math.random()*600))
            base.players[context.senderId].kills += 1
            base.players[context.senderId].liker = randomiz
            base.players[context.senderId].XP += 1
            base.players[context.senderId].money += 10
            if(base.players[context.senderId].XP === 10){
                base.players[context.senderId].lvl += 1
                base.players[context.senderId].XP -= 10
                context.send("Ваш уровень повысился!")
            }
            return context.send("Вы ударили лайкера и победили его! Вам зачислились 1xp и 10 монет!")
        }
        if(base.players[context.senderId].lvl === 7){
            randomiz = (Math.round( Math.random()*700))
            base.players[context.senderId].kills += 1
            base.players[context.senderId].liker = randomiz
            base.players[context.senderId].XP += 1
            base.players[context.senderId].money += 10
            if(base.players[context.senderId].XP === 10){
                base.players[context.senderId].lvl += 1
                base.players[context.senderId].XP -= 10
                context.send("Ваш уровень повысился!")
            }
            return context.send("Вы ударили лайкера и победили его! Вам зачислились 1xp и 10 монет!")
        }
        if(base.players[context.senderId].lvl === 8){
            randomiz = (Math.round( Math.random()*800))
            base.players[context.senderId].kills += 1
            base.players[context.senderId].liker = randomiz
            base.players[context.senderId].XP += 1
            base.players[context.senderId].money += 10
            if(base.players[context.senderId].XP === 10){
                base.players[context.senderId].lvl += 1
                base.players[context.senderId].XP -= 10
                context.send("Ваш уровень повысился!")
            }
            return context.send("Вы ударили лайкера и победили его! Вам зачислились 1xp и 10 монет!")
        }
        if(base.players[context.senderId].lvl === 9){
            randomiz = (Math.round( Math.random()*900))
            base.players[context.senderId].kills += 1
            base.players[context.senderId].liker = randomiz
            base.players[context.senderId].XP += 1
            base.players[context.senderId].money += 10
            if(base.players[context.senderId].XP === 10){
                base.players[context.senderId].lvl += 1
                base.players[context.senderId].XP -= 10
                context.send("Ваш уровень повысился!")
            }
            return context.send("Вы ударили лайкера и победили его! Вам зачислились 1xp и 10 монет!")
        }
        if(base.players[context.senderId].lvl === 10){
            randomiz = (Math.round( Math.random()*1000))
            base.players[context.senderId].kills += 1
            base.players[context.senderId].liker = randomiz
            base.players[context.senderId].XP += 1
            base.players[context.senderId].money += 10
            if(base.players[context.senderId].XP === 10){
                base.players[context.senderId].lvl += 1
                base.players[context.senderId].XP -= 10
                context.send("Ваш уровень повысился!")
            }
            return context.send("Вы ударили лайкера и победили его! Вам зачислились 1xp и 10 монет!")
        }

    }
    let damaga = (Math.round( Math.random()))
    if (damaga === 0){}
    if (damaga === 1){
        base.players[context.senderId].hp -= base.players[context.senderId].lvl
        context.send("Поехавший лайкер ударил вас в ответ! Теперь у вас " +base.players[context.senderId].hp + " хп")
    }
    return context.send('Вы ударили лайкера! У лайкера осталось ' +base.players[context.senderId].liker + ' ХП!' );
})

vk.updates.hear(/^рейд$/i, async (context) => {
    if(base.boss.activate === true){
        base.boss.hp -= 1
        base.players[context.senderId].money += 1
        return context.send('Вы ударили босса и получили монету в карман! Теперь у босса осталось ' +base.boss.hp + 'хп')
    }
    if(base.boss.hp < 1){
        base.boss.activate = false
        return context.send("Босс убит.")
    }
    return context.send('На данный момент рейдов нет')
})

vk.updates.hear(/^купить\s(.*)\s(.*)$/i, async (context) => {
    if(context.$match[1] === "1") {
        let bett = Number(context.$match[2])
        if(isNaN(bett)) return context.send(" количестве не должно быть букв!")
        if(base.players[context.senderId].money < 10 * bett ) return context.send("Нет бабла")
        base.players[context.senderId].dmg += 2 * bett
        base.players[context.senderId].money -= 10 * bett
        return context.send("Теперь у вас больше урона")
    }
    if(context.$match[1] === "2") {
        let bett = Number(context.$match[2])
        if(isNaN(bett)) return context.send(" количестве не должно быть букв!")
        if(base.players[context.senderId].money < 10 * bett) return context.send("Нет бабла")
        base.players[context.senderId].hp += 2 * bett
        base.players[context.senderId].money -= 10 * bett
        return context.send("Теперь у вас больше хп")
    }
    if(context.$match[1] === "3") {
        let bett = Number(context.$match[2])
        if(isNaN(bett)) return context.send(" количестве не должно быть букв!")
        if(base.players[context.senderId].money < 20 * bett) return context.send("Нет бабла")
        base.players[context.senderId].dmg += 5 * bett
        base.players[context.senderId].money -= 20 * bett
        return context.send("Теперь у вас больше урона")
    }
    if(context.$match[1] === "4") {
        let bett = Number(context.$match[2])
        if(isNaN(bett)) return context.send(" количестве не должно быть букв!")
        if(base.players[context.senderId].money < 20 * bett) return context.send("Нет бабла")
        base.players[context.senderId].hp += 5 * bett
        base.players[context.senderId].money -= 20 * bett
        return context.send("Теперь у вас больше хп")
    }


    return context.send('Такого предмета нет! Напиши "Магазин" для того, чтобы купить нужный предмет');
})

vk.updates.hear(/^магазин$/i, async (context) => {
    //закончить команду отправкой ↓
    return context.send(`Для того, чтобы купить предмет, напишите "купить (номер_предмета) (кол-во предмета)"
    1.Камень (+ 2 урона) - 10 монет
    2.Подорожник (+ 2 ХП) - 10 монет
    3.Камень на палке (+ 5 урона) - 20 монет
    4.Рюкзак лайкера(+ 5 ХП) - 20 монет
    Ваш баланс: ${base.players[context.senderId].money}`);
})

vk.updates.hear(/^профиль$/i, async (context) => {
    //закончить команду отправкой ↓
    return context.send(`Ваш урон: ${base.players[context.senderId].dmg}  
    Ваше ХП:  ${base.players[context.senderId].hp} 
    Ваш уровень:  ${base.players[context.senderId].lvl} 
    Ваши монеты:  ${base.players[context.senderId].money}
    Ваш опыт: ${base.players[context.senderId].XP}
    Ваши убийства: ${base.players[context.senderId].kills}`);
})

vk.updates.hear(/^клавиатура открыть$/i, async (context) => {
        vk.api.messages.send({
            peer_id: context.peerId,
            message: "Открываю клавиатуру! Для того, чтобы её закрыть, напиши 'клавиатура закрыть'",
            keyboard: Keyboard.keyboard([
                [
                    Keyboard.textButton({
                        label: "профиль",
                        color: "positive"
                    }),
                    Keyboard.textButton({
                        label: "магазин",
                        color: "positive"
                    })
                ],
                [
                    Keyboard.textButton({
                        label: "ударить",
                        color: "negative"
                    }),
                    Keyboard.textButton({
                        label: "рейд",
                        color: "negative"
                    })
                ],
                [
                    Keyboard.textButton({
                        label: "Реферал помощь",
                        color: "secondary"

                    })
                ]

            ]
            ),
        })
})

vk.updates.hear(/^клавиатура закрыть$/i, async (context) => {
    vk.api.messages.send({
        peer_id: context.peerId,
        message: "Закрываю клавиатуру! Для того, чтобы её открыть, напиши 'клавиатура открыть'",
        keyboard: Keyboard.keyboard([

        ])

    })
})


vk.updates.hear(/^алл$/i, async (context) => {
    //закончить команду отправкой ↓
    if(context.senderId === settings.admin){
        return context.send('Привлечение участников! Админ хочет вам что-то сказать! @all')
    }
    return context.send('вы не админ');
})

//Тоже самое что и сверху
vk.updates.hear(/^Я лайкер$/i, async (context) => {
    return context.send('Кикайте его, ребят');
})

vk.updates.hear(/^Реферал помощь$/i, async (context) => {
    return context.send('Для того, чтобы ввести реферал друга, введите "реферал (реферальный_код)". Для того, чтобы создать свой реферал, введите "реф создать". ВНИМАНИЕ! данные команды можно импользовать только один раз!');
})

vk.updates.hear(/^реферал\s(.*)$/i, async (context) => {
    if(base.players[context.senderId].reff === false) {
        if (!base.referas[context.$match[1]]) return context.send("Такого реферала нет")
        base.players[context.senderId].money += 50
        base.players[context.senderId].reff = true
        base.players[base.referas[context.$match[1]]].money += 80
        return context.send("Вы успешно использовали реферал! Вам и @id" +base.referas[context.$match[1]] + " (создателю) реферала зачислен бонус!" )
    }
    return context.send("вы уже использовали реферал")
})
vk.updates.hear(/^реф создать$/i, async (context) => {
    if(base.players[context.senderId].reff === false) {
        base.players[context.senderId].reff = true
        let ran1 = getRandomInt(0, 10)
        let ran2 = getRandomInt(0, 10)
        let ran3 = getRandomInt(0, 10)
        let ran4 = getRandomInt(0, 10)
        let ran5 = getRandomInt(0, 10)
        let ran6 = getRandomInt(0, 10)
        let ran7 = getRandomInt(0, 10)
        let ran8 = getRandomInt(0, 10)
        let ran9 = getRandomInt(0, 10)
        let ran10 = getRandomInt(0, 10)
        let ran11 = getRandomInt(0, 10)
        let ran12 = getRandomInt(0, 10)
        let ran13 = getRandomInt(0, 10)
        let ran14 = getRandomInt(0, 10)
        let ran15 = getRandomInt(0, 10)
        let ran16 = getRandomInt(0, 10)
        let raf = "" + ran1 + ran2 + ran3 + ran4 + ran5 + ran6 + ran7 + ran8 + ran9 + ran10 + ran11 + ran12 + ran13 + ran14 + ran15 + ran16
        base.referas[raf] = "" + context.senderId
        return context.send("Ваш реферальный код: " + raf + ". Не потеряйте его!")
    }
    return context.send("вы уже использовали реферал")
})

vk.updates.hear(/^Напиши\s(.*)$/i, async (context) => {
    context.send( context.$match[1] );
})

//если функция стартует нормально то
async function run() {
    //проверка подключения вк апи
    await vk.updates.startPolling();
    //написать в консоль ↓
    console.log(">_Started ^)");
}

//если при старте выявлена ошибка то вывести её в консоль
run().catch(console.error);