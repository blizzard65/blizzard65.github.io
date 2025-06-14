const supabase = supabaseClient.createClient(
  'https://vpbiokohfyslgudzesot.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwYmlva29oZnlzbGd1ZHplc290Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4ODI2NDgsImV4cCI6MjA2NTQ1ODY0OH0.sQHNxJNnXe92QAf-yMmEJseWT1fblY0K3mC6NgbdwUw'
);

const messagesElement = document.querySelector('#messages');

function addMessagesToPage(message) {
  const element = document.createElement('li');
  element.classList.add('card', 'm-2');
  element.innerHTML = `
    <div class = "card-body">
                        <div class="row">
                            <div class="col-sm-2 avatar-container">
                                <!-- <image
                                    src="https://media.forgecdn.net/avatars/thumbnails/1087/201/256/256/638629602886478218.png">
                                </image> -->
                                <p class="avatar-username">${message.username}</p>
                            </div>
                            <div class="col-sm-10">
                                <p>${message.content}</p>
                            </div>
                        </div>
                        <div class="row">
                            <p class="col-sm-12 timestamp">${message.created_at}</p>
                        </div>
                    </div >
    `;
    messagesElement.append(element)
}

async function init() {
  let { data: messages, error } = await supabase
    .from('messages')
    .select('*')

  messages.forEach(addMessagesToPage);
}