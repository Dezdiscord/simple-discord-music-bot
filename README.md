### Alanna: Your Friendly Discord Music Bot

**Alanna** is a simple yet powerful music bot designed to bring the joy of music to your Discord server. With an array of intuitive slash commands, Alanna can help you play, manage, and enjoy your favorite tunes effortlessly. Below is a detailed description of Alanna's capabilities:

#### Features:
1. **Help (/help)**
   - Provides a list of all available commands and their descriptions to assist users in navigating the bot's features.

2. **Loop (/loop)**
   - Toggles looping for the current track or queue, ensuring your favorite songs keep playing without interruption.

3. **Now Playing (/nowplaying)**
   - Displays the currently playing song along with relevant details like title, artist, and duration.

4. **Pause (/pause)**
   - Pauses the currently playing track, allowing you to momentarily halt the music.

5. **Ping (/ping)**
   - Checks the bot's response time to the server, ensuring Alanna is running smoothly.

6. **Play (/play)**
   - Plays a specified song or adds it to the queue. You can search by song title, artist, or URL.

7. **Queue (/queue)**
   - Displays the current queue of songs, showing you what's coming up next and the order of playback.

8. **Resume (/resume)**
   - Resumes playback of the currently paused track, letting the music continue where it left off.

9. **Skip (/skip)**
   - Skips the currently playing track, moving to the next song in the queue.

10. **Stop (/stop)**
    - Stops the music and clears the queue, giving you complete control over playback.

11. **Volume (/volume)**
    - Adjusts the playback volume, allowing you to set the perfect listening level.

#### Why Choose Alanna?
- **User-Friendly**: With straightforward slash commands, Alanna is easy to use for both beginners and experienced users.
- **Responsive**: Quick command execution and low latency ensure a seamless music experience.
- **Customizable**: Offers features like volume control and looping to tailor the listening experience to your preferences.
- **Always Available**: Alanna's consistent performance ensures your server always has access to high-quality music playback.

### How to Install and Run Alanna on Visual Studio Code

Follow these steps to get Alanna up and running on your Discord server using Visual Studio Code:

#### Prerequisites
- Node.js installed on your machine.
- A Discord account and a server where you have permission to add bots.
- A Discord bot token. You can obtain this by creating a bot on the [Discord Developer Portal](https://discord.com/developers/applications).

#### Steps to Install and Run Alanna

1. **Clone the Repository**
   - Open Visual Studio Code.
   - Clone the bot repository from GitHub
     ```bash
     git clone https://github.com/Dezdiscord/simple-discord-music-bot.git
     cd alanna-bot
     ```

2. **Install Dependencies**
   - Open a terminal in Visual Studio Code and navigate to the project directory.
   - Run the following command to install the required dependencies:
     ```bash
     npm install
     ```

3. **Configure the Bot**
   - Add your Discord bot token to the `config.json` file:
     ```
     TOKEN=YOUR_DISCORD_BOT_TOKEN
     ```

4. **Run the Bot**
   - Start the bot by running the following command in the terminal:
     ```bash
     node index.js
     ```
   - You should see a message indicating that the bot is online.

5. **Invite the Bot to Your Server**
   - Generate an OAuth2 URL from the Discord Developer Portal to invite your bot to your server. Make sure to select the `bot` and `applications.commands` scopes.
   - Use the URL to invite the bot to your Discord server.

6. **Use the Bot**
   - Once the bot is in your server, you can start using the slash commands to control the music playback.

Enjoy the seamless music experience with Alanna on your Discord server!

---

If you encounter any issues or have questions, feel free to consult the project's documentation or reach out for support.
