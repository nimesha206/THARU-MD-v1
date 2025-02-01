async function githubCommand(sock, chatId) {
    const repoInfo = `*🤖 THARU MD*

*📂 GitHub Repository:*
https://github.com/nimesha206/THARU-MD-v1

*📢 Official Channel:*
https://youtube.com/@nimesha_editz?si=Q5zCorpkPIjMBSaH

_Star ⭐ the repository if you like the bot!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '@newsletter',
                    newsletterName: 'THARU MD',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 