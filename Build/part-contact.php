            <div class="contact" id="contact">
                <h2>contact</h2>

                <?php the_field("contact","option"); ?>

                <form>
                    <div class="contact__inputgroup">
                        <input id="input-name" type="text" placeholder="Name">
                        <input id="input-email" type="email" placeholder="Email">
                    </div>

                    <div class="contact__inputgroup contact__inputgroup--textarea">
                        <textarea id="input-message" placeholder="Message"></textarea>
                        <button type="submit" name="submit">send</button>
                    </div>
                </form>
            </div>
