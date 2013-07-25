            <div class="bio">
                <h2>bio</h2>
                <?php if( get_the_author_meta('description') ) : ?>
                    <?php echo get_the_author_meta('description'); ?>
                <?php endif; ?>
            </div>