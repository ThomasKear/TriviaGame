// alert (colorCodes.back); // alerts `#fff`


var questions = [{
        "question": "This 2004 worm virus affected Windows OS primarily, and was devastating to many critical infrastructures. It didn't spread through e-mail unlike other viruses. Instead, once the virus infected a computer, it looked for other vulnerable systems. It contacted those systems and instructed them to download the virus. The virus would scan random IP addresses to find potential victims. The virus also altered the victim's operating system in a way, making it even hard to reset without cutting the power. It functioned by attacking the security controller Local Security Authority Subsystem Service, as it had a buffer overflow vulnerability. The worm affected hospitals, public transportation, airlines, news agencies and much more. After one million infections, there was an estimated 18 billion dollars in damage recorded.",
        "option1": "Conficker",
        "option2": "Storm Worm",
        "option3": "ILOVEYOU",
        "option4": "Sasser",
        "answer": "4",
        "theAnswer": "Sasser"
    }, {
        "question": "It debuted in late 2001 taking advantage of the Microsoft Internet Information Server's flaw. The variations of the virus plagued the Internet for several months. The interesting thing about this deadly virus is, it did not require you to open an e-mail attachment or run a file; it just required an active Internet connection with which it ruined the Web page that you opened by displaying a text 'Hacked by Chinese!'. And in less than a week's time, it brought down more than 400,000 servers including the White House web server. This virus caused a total damage of approximately $2.6 billion dollars by hitting almost one million PCs.",
        "option1": "The Rabbit",
        "option2": "Sadmind Worm",
        "option3": "Beast (RAT)",
        "option4": "Code Red",
        "answer": "4",
        "theAnswer": "Code Red"
    }, {
        "question": "This series of viruses spreads from underground pirate BBS systems and starts infecting mainstream networks. Festering Hate was the last iteration of this series extending back to 1985 and 1986. Unlike the few Apple viruses that had come before which were essentially annoying, but did no damage, the Festering Hate series of viruses was extremely destructive, spreading to all system files it could find on the host computer (hard drive, floppy, and system memory) and then destroying everything when it could no longer find any uninfected files.",
        "option1": "Ghostball",
        "option2": "'Leandro & Kelly' and 'Freddy K' ",
        "option3": "CyberAIDS",
        "option4": "AIDS",
        "answer": "3",
        "theAnswer": "CyberAIDS"
    }, {
        "question": "This virus explored its way to the malware world on 26th January 2004 and sent a shockwave around the world, as it scattered exponentially via e-mail through email with random addresses of senders and subject lines. It destroyed the cyber world by activating a tremendous denial of service attack that infected close to about two million PCs. It transmitted itself in a particularly deceitful manner through e-mail as what receiver would first reckon to be a bounced error message as it reads “Mail Transaction Failed.” But, as soon as the message is clicked upon, the attachment is executed and the worm is transferred to email addresses found in the user's address book. The damage caused by this fastest-spreading mass mailer worm was a whopping $38 billion.",
        "option1": "My Doom",
        "option2": "Love bug",
        "option3": "Pikachu virus",
        "option4": "Mylife",
        "answer": "1",
        "theAnswer": "My Doom"
    }, {
        "question": "This system, an experimental self-replicating program, is written by Bob Thomas at BBN Technologies to test John von Neumann's theory.  John von Neumann wrote an article on the 'Theory of self-reproducing automata' and is published. The article is based on lectures given by von Neumann at the University of Illinois about the 'Theory and Organization of Complicated Automata' in 1949. This system infected DEC PDP-10 computers running the TENEX operating system. It gained access via the ARPANET and copied itself to the remote system where the message 'I'm the creeper, catch me if you can!' was displayed. The Reaper program was later created to delete this virus.  Essentially this was the very first virus dating back to 1971. ",
        "option1": "The Creeper",
        "option2": "Brain boot sector",
        "option3": "Ping-pong virus",
        "option4": "Cascade",
        "answer": "1",
        "theAnswer": "The Creeper"
    }, {
        "question": "This was perhaps the most dangerous computer virus ever created that in the form of a worm — it was a standalone program capable of replicating itself. This virus initially traveled the Internet by e-mail and managed to crash PCs all across the world. To make it even more alluring, the subject of the e-mail said that the message was a love letter from a secret admirer. An attachment in the e-mail was what caused all the trouble. The original worm had the file name of LOVE-LETTER-FOR-YOU.TXT.vbs. The moment someone opened the file, the virus emailed itself to the first 50 contacts available in the PC's Windows address book. The virus caused a total damage of around $10 billion affecting almost 10% of the world's PCs connected to the Internet.",
        "option1": "Melissa",
        "option2": "Brain boot",
        "option3": "ILOVEYOU",
        "option4": "Michelangelo virus",
        "answer": "3",
        "theAnswer": "ILOVEYOU"
    }, {
        "question": "This virus was the first mass-mailing macro virus for the new age of e-mailing which became the breaking news across the world on March 26, 1999. Based on a Microsoft Word macro and built by David L, Melissa was spread in the form of an email attachment by the name “list.doc.” When the attachment was clicked upon, the virus replicates itself and seeks for the Microsoft Outlook address book to e-mail itself to the first 50 names on the list with a message, “Here is that document you asked for…don't show anyone else. ;-)” Later on, FBI arrested David L and slapped him with a fine of $5000 for unleashing the fastest virus of its time.",
        "option1": "Bagle",
        "option2": "Melissa",
        "option3": "Rugrat",
        "option4": "Bitfrost",
        "answer": "2",
        "theAnswer": "Melissa"
    }, {
        "question": " This worm is a record-breaking worm in many regards. It exploited holes in several Internet Security Systems (ISS) products. It was the fastest disclosure to worm, it was the first internet worm to carry a destructive payload and it spread rapidly using a pre-populated list of ground-zero hosts. Once it infects a computer by exploiting a vulnerability in the ISS software packages (RealSecure Network, RealSecure Server Sensor, RealSecure Desktop, and BlackICE), it attempts to infect other computers using the same vulnerability. It launches these attacks as fast as possible, attacking a pseudo - random subset of IP addresses as quickly as allowed by the computer 's Internet connection. It repeats these attacks in groups of 20,000, alternately launching attacks and overwriting sections of the computer's hard disk(s).",
        "option1": "The Witty Worm",
        "option2": "Daprosy Worm",
        "option3": "Koobface",
        "option4": "Storm Worm",
        "answer": "1",
        "theAnswer": "The Witty Worm"
    }, {
        "question": "This was a Trojan horse made to infect Windows computers so that it will perform various criminal tasks. The most common of these tasks are usually man-in-the-browser keylogging and form grabbing. The majority of computers were infected either through drive-by downloads or phishing scams. First identified in 2009, it managed to compromise thousands of FTP accounts and computers from large multinational corporations and banks such as Amazon, Oracle, Bank of America, Cisco, etc. Controllers of the Trojan's botnet used it to steal the login credentials of social network, email and banking accounts. In the US alone, it was estimated that more than 1 million computers were infected, with 25% in the US. The entire operation was sophisticated, involving people from around the world to act as money mules to smuggle and transfer cash to the ringleaders in Eastern Europe. About $70 million were stolen and in possession of the ring. 100 people were arrested in connection of the operation. In late 2010, the creator of the Trojan announced his retirement but many experts believe this to be false.",
        "option1": "Mocmex",
        "option2": "Stuxnet",
        "option3": "Zeus",
        "option4": "Spyeye",
        "answer": "3",
        "theAnswer": "Zeus"
    }, {
        "question": "This is a form of a Trojan horse ransomware targeted at computers running Windows. It uses several methods to spread itself, such as email, and once a computer is infected, it will proceed to encrypt certain files on the hard drive and any mounted storage connected to it with RSA public key cryptography. While it is easy enough to remove the malware from the computer, the files will still remain encrypted. The only way to unlock the files is to pay a ransom by a deadline. If the deadline is not met, the ransom will increase significantly or the decryption keys deleted. The ransom usually amount to $400 in prepaid cash or bitcoin.  The ransom operation was eventually stopped when law enforcement agencies and security companies managed to take control part of the botnet operating both this and Zeus. Evgeniy Bogachev, the ring leader, was charged and the encryption keys were released to the affected computers. From data collected from the raid, the number of infections is estimated to be 500,000, with the number of those who paid the ransom to be at 1.3%, amounting to $3 million.",
        "option1": "Clapi",
        "option2": "Cryptolocker",
        "option3": "FakeAV",
        "option4": "Kido",
        "answer": "2",
        "theAnswer": "Cryptolocker"
    }



];
